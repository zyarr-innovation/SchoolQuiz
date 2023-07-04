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
  socket = io("http://localhost:3000/");
  highlightedAnswerIndex$ = -1;

  currentMessage$: string = "Welcome to Zyarr Quiz";
  currentQuestion$: IQuestion = {
    question: "Which is the highest peak",
    optionList: ["Mount Everest", "Mount Abu", "Mount Isa", "Mount Musa"],
    answer: 1
  }

  constructor(private quizService: QuizService) {
  }

  ngOnInit(): void {

    this.socket.on('msgNextQuestion', (data) => {
      this.currentMessage$ = "";
      this.highlightedAnswerIndex$ = -1
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
      console.log(data)
      this.highlightedAnswerIndex$ = +data - 1;
    })
  }


  startQuiz() {
    this.quizService.startQuiz().subscribe(console.log)
  }

  stopQuiz() {
    this.quizService.stopQuiz().subscribe(console.log)
  }

  nextQuiz() {
    this.highlightedAnswerIndex$ = -1;
    this.quizService.nextQuestion().subscribe(console.log)
  }

  answerQuiz() {
    this.quizService.anwerQuestion().subscribe(console.log)
  }
}
