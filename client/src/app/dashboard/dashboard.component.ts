import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MessageConstant } from '../../../../model/msg-const';
import { io } from 'socket.io-client';
import { IParticipant } from '../../../../model/model';
import { QuizService } from '../quiz.service';
import { Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, MatCardModule, MatListModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  socket = io(MessageConstant.baseUrl);
  private refresh$ = new Subject<void>();
  participantList$: IParticipant[] = []

  constructor(private quizService: QuizService) {
  }

  ngOnInit(): void {
    this.refresh$.pipe(
      switchMap(() => this.quizService.fetchParticipants())
    ).subscribe(data => {
      this.participantList$ = data;
    });

    this.refresh$.next();
    const handleUpdate = () => this.refresh$.next();

    this.socket.on(MessageConstant.msgUpdateDashboard, handleUpdate);
    this.socket.on(MessageConstant.apiAddParticipant, handleUpdate);
    this.socket.on(MessageConstant.apiRemoveParticipant, handleUpdate);
  }

  getParticipantList() {
    this.quizService.fetchParticipants().subscribe(data => {
      console.log(data)
      this.participantList$ = data
    });
  }
}
