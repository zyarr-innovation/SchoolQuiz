import { Component } from '@angular/core';
import { IParticipant, IQuestion } from '../../../../model/model';
import { QuizService } from '../shared/quiz-service';
import { io } from 'socket.io-client'
import { MessageConstant } from '../../../../model/msg-const';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../shared/shared.css']
})
export class DashboardComponent {
  socket = io(MessageConstant.baseUrl);
  participantList$: IParticipant[] = []

  constructor(private quizService: QuizService) {
  }

  ngOnInit(): void {
    this.getParticipantList();
    this.socket.on(MessageConstant.msgUpdateDashboard, (data) => {
      setTimeout(async () => this.getParticipantList(), 1000);
    });
    this.socket.on(MessageConstant.apiAddParticipant, (data) => {
      setTimeout(async () => this.getParticipantList(), 1000);
    });
    this.socket.on(MessageConstant.apiRemoveParticipant, (data) => {
      setTimeout(async () => this.getParticipantList(), 1000);
    });
  }

  getParticipantList() {
    this.quizService.fetchParticipants().subscribe(data => {
      console.log(data)
      this.participantList$ = data
    });
  }
}
