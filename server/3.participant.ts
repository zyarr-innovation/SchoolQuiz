import { Socket } from 'socket.io';
import { Server as SocketIOServer } from 'socket.io';
import { json } from 'stream/consumers';

export interface IParticipant {
  id: number;
  name: string;
  email: string;
  score: number;
  timespent: number;
};

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
      console.log(`A user connected: ${socket.id}`);

      //Server wont subscribe to this
      // socket.on('addparticipant', () => {
      //   this.addParticipant();
      // });

      // socket.on('removeparticipant', () => {
      //   this.removeParticipant();
      // });

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
    let foundParticipant = this.participantList.find(
      eachParticipant => eachParticipant.name == inParticipant.name
    );

    if (!foundParticipant) {
      inParticipant.id = this.participantList[this.participantList.length].id + 1;
      inParticipant.score = 0;
      inParticipant.timespent = 0;
      this.participantList.push(inParticipant);
      retValue = inParticipant;
    } else {
      foundParticipant.score = 0;
      foundParticipant.timespent = 0;
      retValue = foundParticipant;
    }

    this.io.emit('addparticpant', retValue);
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
    const cloneParticipantList = Object.assign({}, this.participantList);
    cloneParticipantList.sort((a, b) => a.score - b.score);
    return cloneParticipantList;
  }
}
