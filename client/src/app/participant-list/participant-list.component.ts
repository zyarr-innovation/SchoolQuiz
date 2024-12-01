import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuizService } from '../shared/quiz-service';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.css']
})
export class ParticipantListComponent implements OnInit {
  participants: any[] = [];

  constructor(private http: HttpClient,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.fetchParticipants();
  }

  fetchParticipants(): void {
    this.quizService.fetchParticipants().subscribe(
      (data: any) => {
        this.participants = data;
      },
      (error) => {
        console.error('Error fetching participants:', error);
      }
    );
  }

  deleteParticipant(participant: any): void {
    const confirmDelete = confirm(`Are you sure you want to delete ${participant.name}?`);
    if (confirmDelete) {
      this.quizService.deleteParticipant(participant).subscribe(
        () => {
          this.participants = this.participants.filter(p => p.id !== participant.id);
          alert(`${participant.name} has been deleted.`);
        },
        (error: any) => {
          console.error('Error deleting participant:', error);
        }
      );
    }
  }
}
