import { Component } from '@angular/core';
import { IParticipant, IQuestion } from '../../../../model/model';
import { QuizService } from '../shared/quiz-service';
import { io } from 'socket.io-client'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../shared/shared.css']
})
export class DashboardComponent {
  socket = io("http://localhost:3000/");
  participantList$: IParticipant[] = []

  constructor(private quizService: QuizService) {
  }

  ngOnInit(): void {
    this.getParticipantList();
    this.socket.on('msgAnswerQuestion', (data) => {
      this.getParticipantList();
    });
  }

  getParticipantList() {
    this.quizService.getParticipantList().subscribe(data => {
      console.log(data)
      this.participantList$ = data
    });
  }
}
