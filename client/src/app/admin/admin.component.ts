import { Component } from '@angular/core';
import { IQuestion } from '../shared/models';
import { io } from 'socket.io-client';
import { QuizService } from '../shared/quiz-service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css', '../shared/shared.css']
})
export class AdminComponent {
  currentMessage$: string = "Welcome to Zyarr Quiz";
  currentQuestion$: IQuestion = {
    question: "Which is the highest peak",
    optionList: ["Mount Everest", "Mount Abu", "Mount Isa", "Mount Musa"],
    answer: 1
  }

  constructor(private quizService: QuizService) {
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

    socket.on('error', (error) => {
      console.error('Socket error:', error);
    });
  }


  startQuiz() {
    this.quizService.startQuiz().subscribe(console.log)
  }

  stopQuiz() {
    this.quizService.stopQuiz().subscribe(console.log)
  }

  nextQuiz() {
    this.quizService.nextQuestion().subscribe(console.log)
  }
}
