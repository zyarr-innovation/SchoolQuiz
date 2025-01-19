import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { io } from 'socket.io-client';
import { MessageConstant } from '../../../../model/msg-const';
import { IQuestion } from '../../../../model/model';
import { QuizService } from '../quiz.service';
import { MatLineModule } from '@angular/material/core';

export enum tagStartStop {
  DISABLE = 0,
  START,
  STOP,
}

export enum tagNextAns {
  DISABLE = 0,
  NEXT,
  ANSWER,
}

@Component({
  selector: 'app-admin',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatLineModule,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  language = 'en';
  enumstartStop = tagStartStop;
  enumNextAns = tagNextAns;
  appNextState = tagStartStop.START;
  questNextState = tagNextAns.DISABLE;

  socket = io(MessageConstant.baseUrl);
  actualAnswerIndex$ = -1;

  currentMessage$: string =
    "Welcome to the ZYInnovators Quiz Competition! Get ready to challenge your knowledge. Remember, it's not just about winning. Think, learn, and have fun! Enjoy the learning journey!";
  currentQuestion$: IQuestion = {
    id: 0,
    question: 'Welcome to the ZYInnovators Quiz Competition!',
    options: [
      'Get ready to challenge your knowledge',
      "Remember, it's not just about winning",
      'Think, learn, and have fun!',
      'Enjoy the learning journey!',
    ],
    answer: -100,
  };

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.getLanguageInfo();

    this.socket.on(MessageConstant.msgNextQuestion, (data) => {
      this.currentMessage$ = '';
      this.actualAnswerIndex$ = -1;
      this.currentQuestion$ = data;
      this.nextState();
    });
    this.socket.on(MessageConstant.msgStartQuiz, (data) => {
      this.currentMessage$ = data;
      this.startState();
    });
    this.socket.on(MessageConstant.msgStopQuiz, (data) => {
      this.currentMessage$ = data;
      this.stopState();
    });
    this.socket.on(MessageConstant.msgError, (error) => {
      console.error('Socket error:', error);
      this.stopState();
    });
    this.socket.on(MessageConstant.msgAnswerQuestion, (data) => {
      console.log(data);
      this.actualAnswerIndex$ = +data - 1;
      this.answerState();
    });
  }

  startState() {
    this.appNextState = tagStartStop.STOP;
    this.questNextState = tagNextAns.ANSWER;
  }
  stopState() {
    this.appNextState = tagStartStop.START;
    this.questNextState = tagNextAns.DISABLE;
  }
  nextState() {
    this.appNextState = tagStartStop.DISABLE;
    this.questNextState = tagNextAns.ANSWER;
  }
  answerState() {
    this.appNextState = tagStartStop.STOP;
    this.questNextState = tagNextAns.NEXT;
  }

  getLanguageInfo() {
    this.quizService.getLanguageInfo().subscribe((data: any) => {
      console.log(data);
      this.language = data?.message?.language;
    });
  }

  startQuiz() {
    this.quizService.startQuiz().subscribe(console.log);
  }

  stopQuiz() {
    this.quizService.stopQuiz().subscribe(console.log);
  }

  nextQuiz() {
    this.actualAnswerIndex$ = -1;
    this.quizService.nextQuestion().subscribe(console.log);
  }

  answerQuiz() {
    this.quizService.anwerQuestion().subscribe(console.log);
  }
}
