import { Component } from '@angular/core';
import { IAnswer, IParticipant, IQuestion } from '../../../../model/model';
import { MessageConstant } from '../../../../model/msg-const';
import { io } from 'socket.io-client';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css', '../shared/shared.css']
})
export class UserComponent {
  enableControl = true
  socket = io(MessageConstant.baseUrl);
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

  constructor(private activatedroute: ActivatedRoute) {
    let name = this.activatedroute.snapshot.paramMap.get("name");
    this.currentCandidate$ = {
      id: 0,
      name: name!,
      email: name + "@zyarrinnovation.com",
      score: 0,
      timespent: 0,
      answer: []
    }
  }

  ngOnInit(): void {
    this.socket.on(MessageConstant.msgNextQuestion, (data) => {
      this.enableControl = true;
      this.currentMessage$ = "";
      this.actualAnswerIndex$ = -1
      this.selectedAnswerIndex$ = -1;
      this.currentQuestion$ = data;
    })
    this.socket.on(MessageConstant.msgStartQuiz, (data) => {
      this.currentMessage$ = data;
    })
    this.socket.on(MessageConstant.msgStopQuiz, (data) => {
      this.enableControl = false;
      this.currentMessage$ = data;
    })
    this.socket.on(MessageConstant.msgError, (error) => {
      console.error('Socket error:', error);
    });
    this.socket.on(MessageConstant.msgAnswerQuestion, (data) => {
      this.enableControl = false;
      this.actualAnswerIndex$ = +data;

      let answer: IAnswer = {
        questionid: this.currentQuestion$.id,
        selected: this.selectedAnswerIndex$,
        actual: this.actualAnswerIndex$,
        timespent: 0,
      }
      //alert(JSON.stringify(answer))
      this.currentCandidate$.answer.push(answer);

      if (this.selectedAnswerIndex$ == this.actualAnswerIndex$) {
        this.currentCandidate$.score++;
      }
      this.socket.emit(MessageConstant.msgUpdateAnswer, this.currentCandidate$);
    })
  }

  onAnswerClick(index: number) {
    this.selectedAnswerIndex$ = index;
  }
}
