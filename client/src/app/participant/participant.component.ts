import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { io } from 'socket.io-client';
import { MessageConstant } from '../../../../model/msg-const';
import { IAnswer, IParticipant, IQuestion } from '../../../../model/model';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-participant',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatListModule],
  templateUrl: './participant.component.html',
  styleUrl: './participant.component.css'
})
export class ParticipantComponent {
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
  participantRemoved = false; // New flag for UI dimming

  currentMessage$: string = "Welcome to the ZYInnovators Quiz Competition! Get ready to challenge your knowledge. Remember, it's not just about winning. Think, learn, and have fun! Enjoy the learning journey!"
  currentQuestion$: IQuestion = {
    id: 0,
    question: "Welcome to the ZYInnovators Quiz Competition!",
    options: ["Get ready to challenge your knowledge", "Remember, it's not just about winning", "Think, learn, and have fun!", "Enjoy the learning journey!"],
    answer: -100
  }

  constructor(private activatedroute: ActivatedRoute,
    private quizService: QuizService) {
    let id = this.activatedroute.snapshot.paramMap.get("id");
    this.currentCandidate$ = {
      id: 0,
      name: name!,
      email: name + "@zyarrinnovation.com",
      score: 0,
      timespent: 0,
      answer: []
    }
    this.quizService.getParticipant(+id!).subscribe(data => {
      this.currentCandidate$ = data
    })
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
      this.socket.emit(MessageConstant.msgUpdateCandidate, this.currentCandidate$);
    })

    // Add handler for participant removal
    this.socket.on("removeparticpant", (removedParticipant: IParticipant) => {
      if (removedParticipant.id === this.currentCandidate$.id) {
        this.participantRemoved = true;
        this.socket.off(); // Unsubscribe all handlers
      }
    });
  }

  onAnswerClick(index: number) {
    this.selectedAnswerIndex$ = index;
  }
}
