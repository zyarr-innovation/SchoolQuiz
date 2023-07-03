import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { QuizServerRoutes } from '../server-info/quiz-server-routes'
import { EMPTY, from, of } from "rxjs";
import { IParticipant } from "./models";

@Injectable()
export class QuizService {
  //---------------- Properties---------------
  readonly rootUrl = window.location.origin;
  serverRoutes: QuizServerRoutes = new QuizServerRoutes();

  qns: any[];
  seconds: number;
  timer;
  qnProgress: number;
  correctAnswerCount: number = 0;

  //---------------- Helper Methods---------------
  constructor(private http: HttpClient) { }
  displayTimeElapsed() {
    return (
      Math.floor(this.seconds / 3600) +
      ":" +
      Math.floor(this.seconds / 60) +
      ":" +
      Math.floor(this.seconds % 60)
    );
  }

  getParticipantName() {
    let participant: IParticipant = JSON.parse(localStorage.getItem("participant"));
    if (participant) {
      participant?.Name;
    }
    return "";
  }

  insertParticipant(name: string, email: string) {
    let participantInfo: IParticipant = {
      name: name,
      email: email
    };
    localStorage.setItem("participant", JSON.stringify(participantInfo))
    this.serverRoutes.registerParticipant(name, email)
    return of(participantInfo);
  }

  getParticipantList() {
    return of(this.serverRoutes.getParticipantList());
  }

  //---------------- Http Methods---------------
  getQuestions() {
    let questionList = this.serverRoutes.getQuestionList()
    let randomIndex = this.getRandomIndex(questionList.length);
    let fewQuestionList = randomIndex.map(index => questionList[index]);
    return of(fewQuestionList);
  }

  submitScore() {
    var participant = JSON.parse(localStorage.getItem("participant"));
    participant.Score = this.correctAnswerCount;
    participant.TimeSpent = this.seconds;

    this.serverRoutes.updateScore(
      participant.Id,
      participant.Score,
      participant.TimeSpent,
    )

    return EMPTY;
  }
}
