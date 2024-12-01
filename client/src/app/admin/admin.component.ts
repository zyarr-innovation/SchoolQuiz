import { Component } from '@angular/core';
import { IQuestion } from '../../../../model/model';
import { io } from 'socket.io-client';
import { QuizService } from '../shared/quiz-service';
import { MessageConstant } from '../../../../model/msg-const';


export enum tagStartStop {
  DISABLE = 0,
  START,
  STOP,
};

export enum tagNextAns {
  DISABLE = 0,
  NEXT,
  ANSWER
};

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css', '../shared/shared.css']
})
export class AdminComponent {

  enumstartStop = tagStartStop;
  enumNextAns = tagNextAns;
  appNextState = tagStartStop.START
  questNextState = tagNextAns.DISABLE

  socket = io(MessageConstant.baseUrl);
  actualAnswerIndex$ = -1;

  currentMessage$: string = "Welcome to Zyarr Quiz";
  currentQuestion$: IQuestion = {
    id: 0,
    question: "Which is the highest peak",
    optionList: ["Mount Everest", "Mount Abu", "Mount Isa", "Mount Musa"],
    answer: 1
  }

  constructor(private quizService: QuizService) {
  }

  ngOnInit(): void {

    this.socket.on(MessageConstant.msgNextQuestion, (data) => {
      this.currentMessage$ = "";
      this.actualAnswerIndex$ = -1
      this.currentQuestion$ = data;
      this.nextState()
    })
    this.socket.on(MessageConstant.msgStartQuiz, (data) => {
      this.currentMessage$ = data;
      this.startState()
    })
    this.socket.on(MessageConstant.msgStopQuiz, (data) => {
      this.currentMessage$ = data;
      this.stopState()
    })
    this.socket.on(MessageConstant.msgError, (error) => {
      console.error('Socket error:', error);
      this.stopState()
    });
    this.socket.on(MessageConstant.msgAnswerQuestion, (data) => {
      console.log(data)
      this.actualAnswerIndex$ = +data;
      this.answerState()
    })
  }

  startState() {
    this.appNextState = tagStartStop.STOP
    this.questNextState = tagNextAns.ANSWER
  }
  stopState() {
    this.appNextState = tagStartStop.START
    this.questNextState = tagNextAns.DISABLE
  }
  nextState() {
    this.appNextState = tagStartStop.DISABLE
    this.questNextState = tagNextAns.ANSWER
  }
  answerState() {
    this.appNextState = tagStartStop.STOP
    this.questNextState = tagNextAns.NEXT
  }

  startQuiz() {
    this.quizService.startQuiz().subscribe(console.log)
  }
 
  stopQuiz() {
    this.quizService.stopQuiz().subscribe(console.log)
  }

  nextQuiz() {
    this.actualAnswerIndex$ = -1;
    this.quizService.nextQuestion().subscribe(console.log)
  }

  answerQuiz() {
    this.quizService.anwerQuestion().subscribe(console.log)
  }
}
