import { Component } from '@angular/core';
import { IAnswer, IParticipant, IQuestion } from '../../../../model/model';
import { io } from 'socket.io-client';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css', '../shared/shared.css']
})
export class UserComponent {
  socket = io("http://localhost:3000/");
  actualAnswerIndex$ = -1;
  selectedAnswerIndex$ = -1;

  currentCandidate$: IParticipant = {
    id: 0,
    name: "arif",
    email: "arif@zyarrinnovation.com",
    score: 0,
    timespent: 0,
    answer: []
  }

  currentMessage$: string = "Welcome to Zyarr Quiz";
  currentQuestion$: IQuestion = {
    id: 0,
    question: "Which is the highest peak",
    optionList: ["Mount Everest", "Mount Abu", "Mount Isa", "Mount Musa"],
    answer: 1
  }

  ngOnInit(): void {
    this.socket.on('msgNextQuestion', (data) => {
      this.currentMessage$ = "";
      this.actualAnswerIndex$ = -1
      this.selectedAnswerIndex$ = -1;
      this.currentQuestion$ = data;
    })
    this.socket.on('msgStartQuiz', (data) => {
      this.currentMessage$ = data;
    })
    this.socket.on('msgStopQuiz', (data) => {
      this.currentMessage$ = data;
    })
    this.socket.on('error', (error) => {
      console.error('Socket error:', error);
    });

    this.socket.on('msgAnswerQuestion', (data) => {
      this.actualAnswerIndex$ = +data - 1;

      let answer: IAnswer = {
        questionid: this.currentQuestion$.id,
        selected: this.selectedAnswerIndex$,
        actual: this.actualAnswerIndex$,
        timespent: 0,
      }
      this.currentCandidate$.answer.push(answer);

      if (this.selectedAnswerIndex$ == this.actualAnswerIndex$) {
        this.currentCandidate$.score++;
      }
      console.log("msgUpdateAnswer==>", this.currentCandidate$)
      this.socket.emit("msgUpdateAnswer", this.currentCandidate$);

    })
  }

  onAnswerClick(index: number) {
    this.selectedAnswerIndex$ = index;
  }
}
