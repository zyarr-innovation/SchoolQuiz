import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MessageConstant } from '../../../../model/msg-const';
import { io } from 'socket.io-client';
import { IParticipant } from '../../../../model/model';
import { QuizService } from '../quiz.service';


@Component({
  selector: 'app-participant-list',
  imports: [CommonModule, MatCardModule, MatListModule, MatIconModule ],
  templateUrl: './participant-list.component.html',
  styleUrl: './participant-list.component.css'
})
export class ParticipantListComponent {
  socket = io(MessageConstant.baseUrl);
  participantList$: IParticipant[] = []

  constructor(private quizService: QuizService) {
  }

  ngOnInit(): void {
    this.getParticipantList();
  }

  getParticipantList() {
    this.quizService.fetchParticipants().subscribe(data => {
      console.log(data)
      this.participantList$ = data
    });
  }

  deleteParticipant(participant: any): void {
    const confirmDelete = confirm(`Are you sure you want to delete ${participant.name}?`);
    if (confirmDelete) {
      this.quizService.deleteParticipant(participant).subscribe(
        () => {
          this.participantList$ = this.participantList$.filter(eachParticipant => eachParticipant.id !== participant.id);
          alert(`${participant.name} has been deleted.`);
        },
        (error: any) => {
          console.error('Error deleting participant:', error);
        }
      );
    }
  }
}
