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

      socket.on(MessageConstant.msgUpdateCandidate, (data) => {
        let updatedParticipant: IParticipant = data;
        let isFound = false
        for (let eachParticipant of this.participantList) {
          if (eachParticipant.id == updatedParticipant.id) {
            isFound = true;
            eachParticipant.score = updatedParticipant.score
            eachParticipant.answer = updatedParticipant.answer
            eachParticipant.timespent = updatedParticipant.timespent
            break;
          }
        }

        if (!isFound) {
          this.participantList.push(updatedParticipant);
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

    for (let eachParticipant of this.participantList) {
      if (eachParticipant.name == inParticipant.name) {
        eachParticipant.score = 0;
        eachParticipant.timespent = 0;
        retValue = eachParticipant;
        return retValue;
      }
    }

    if (0 === this.participantList.length) {
      inParticipant.id = 0;
    } else {
      inParticipant.id = this.participantList[this.participantList.length - 1].id + 1;
    }
    inParticipant.score = 0;
    inParticipant.timespent = 0;
    this.participantList.push(inParticipant);
    retValue = inParticipant;

    this.io.emit(MessageConstant.apiAddParticipant, retValue);
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
    let cloneParticipantList = [...this.participantList];
    cloneParticipantList.sort((a, b) => a.score - b.score);
    cloneParticipantList.reverse()
    return cloneParticipantList;
  }
}
