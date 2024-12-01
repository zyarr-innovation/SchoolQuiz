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
      this.getParticipantList();
    });
    this.socket.on(MessageConstant.apiAddParticipant, (data) => {
      this.getParticipantList();
    });
    this.socket.on(MessageConstant.apiRemoveParticipant, (data) => {
      this.getParticipantList();
    });
  }

  getParticipantList() {
    this.quizService.fetchParticipants().subscribe(data => {
      console.log(data)
      this.participantList$ = data
    });
  }
}
