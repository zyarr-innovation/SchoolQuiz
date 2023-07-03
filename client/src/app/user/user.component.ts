import { Component } from '@angular/core';
import { IQuestion } from '../shared/models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css', '../shared/shared.css']
})
export class UserComponent {
  currentQuestion: IQuestion = {
    question: "Which is the highest peak",
    options: ["Mount Everest", "Mount Abu", "Mount Isa", "Mount Musa"],
    answer: 1
  }
}
