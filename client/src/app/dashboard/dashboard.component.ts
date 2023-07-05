import { Component } from '@angular/core';
import { IQuestion } from '../../../../model/model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../shared/shared.css']
})
export class DashboardComponent {
  currentQuestion: IQuestion = {
    id: 0,
    question: "Which is the highest peak",
    optionList: ["Mount Everest", "Mount Abu", "Mount Isa", "Mount Musa"],
    answer: 1
  }
}
