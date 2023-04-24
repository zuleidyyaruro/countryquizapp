import { Component } from '@angular/core';
import { Countries } from './quiz/interfaces/quiz.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numberQuestion: number = 0;
  maxQuestions: number = 5;
  allCountries: Countries[] = [];
  points: number = 0;

  onItem(event: number) {
    this.numberQuestion = event;
  }

  onPoint(event: number) {
    this.points = event;
  }


}
