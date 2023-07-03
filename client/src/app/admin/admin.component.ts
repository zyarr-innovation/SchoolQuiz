import { Component } from '@angular/core';
import { IQuestion } from '../shared/models';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css', '../shared/shared.css']
})
export class AdminComponent {
  currentQuestion: IQuestion = {
    question: "Which is the highest peak",
    options: ["Mount Everest", "Mount Abu", "Mount Isa", "Mount Musa"],
    answer: 1
  }

  startQuiz() {
    
  }

  stopQuiz() {

  }

  nextQuiz() {

  }
}
