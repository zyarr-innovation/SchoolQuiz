import { Socket } from 'socket.io';
import { Server as SocketIOServer } from 'socket.io';
import { json } from 'stream/consumers';
import { IParticipant } from '../model/model';
import { MessageConstant } from '../model/msg-const';


export class ParticipantList {
  private io: SocketIOServer;
  private participantList: IParticipant[] = [];

  constructor(io: SocketIOServer) {
    this.io = io;
    this.setupSocketHandlers();
    this.participantList = [];
  }

  private setupSocketHandlers() {
    this.io.on('connection', (socket: Socket) => {
      console.log(`A user connected to Participant List: ${socket.id}`);

      socket.on(MessageConstant.msgUpdateAnswer, (data) => {
        let updatedParticipant: IParticipant = data;
        let foundParticipant = this.participantList.find(
          eachParticipant => eachParticipant.name == updatedParticipant.name
        );

        if (!foundParticipant) {
          this.participantList.push(updatedParticipant);
        } else {
          foundParticipant = updatedParticipant;
        }
      });
    });
  }

  reset() {
    this.participantList = [];
  }

  get(participantName: string) {
    let foundParticipant = this.participantList.find(
      eachParticipant => eachParticipant.name == participantName
    );
    return foundParticipant;
  }

  getById(participantId: number) {
    let foundParticipant = this.participantList.find(
      eachParticipant => eachParticipant.id == participantId
    );
    return foundParticipant;
  }

  add(inParticipant: IParticipant): IParticipant {
    let retValue;

    if (inParticipant.name == 'admin') {
      this.participantList = [];
      retValue = inParticipant;
      return retValue;
    }

    let foundParticipant = this.participantList.find(
      eachParticipant => eachParticipant.name == inParticipant.name
    );

    if (!foundParticipant) {
      inParticipant.id = 0 < this.participantList.length ?
        this.participantList[this.participantList.length].id + 1 : 1;

      inParticipant.score = 0;
      inParticipant.timespent = 0;
      this.participantList.push(inParticipant);
      retValue = inParticipant;

      this.io.emit('addparticpant', retValue);
    } else {
      foundParticipant.score = 0;
      foundParticipant.timespent = 0;
      retValue = foundParticipant;
    }

    return retValue;
  }

  remove(inParticipan: IParticipant): boolean {
    let retValue = false;
    let foundParticipant = this.participantList.find(
      eachParticipant => eachParticipant.name == inParticipan.name
    );

    if (foundParticipant) {
      this.participantList.splice(foundParticipant.id, foundParticipant.id + 1);
      this.io.emit('removeparticpant', foundParticipant);
      retValue = true;
    }

    return retValue;
  }

  getList(): IParticipant[] {
    const cloneParticipantList = [...this.participantList];
    cloneParticipantList.sort((a, b) => a.score - b.score);
    return cloneParticipantList;
  }
}
