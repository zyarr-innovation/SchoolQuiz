import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MessageConstant } from '../../../../model/msg-const';
import { io } from 'socket.io-client';
import { IParticipant } from '../../../../model/model';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, MatCardModule, MatListModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
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
