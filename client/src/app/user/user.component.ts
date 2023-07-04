import { Component } from '@angular/core';
import { IQuestion } from '../shared/models';
import { io } from 'socket.io-client';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css', '../shared/shared.css']
})
export class UserComponent {
  currentMessage$: string = "Welcome to Zyarr Quiz";
  currentQuestion$: IQuestion = {
    question: "Which is the highest peak",
    optionList: ["Mount Everest", "Mount Abu", "Mount Isa", "Mount Musa"],
    answer: 1
  }

  ngOnInit(): void {
    const socket = io("http://localhost:3000/");
    socket.on('msgNextQuestion', (data) => {
      this.currentMessage$ = "";
      this.currentQuestion$ = data;
    })
    socket.on('msgStartQuiz', (data) => {
      this.currentMessage$ = data;
    })
    socket.on('msgStopQuiz', (data) => {
      this.currentMessage$ = data;
    })
  }
}
