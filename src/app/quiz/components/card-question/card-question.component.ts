import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Countries } from '../../interfaces/quiz.interface';
import { every, lastValueFrom } from 'rxjs';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-card-question',
  templateUrl: './card-question.component.html',
  styleUrls: ['./card-question.component.css']
})
export class CardQuestionComponent implements OnInit {

  item: number = 0;
  oneCountry!: Countries;
  fourCountries: Countries[] = [];
  newArrayOfCountries: Countries[] = [];
  questionType: number = 0;
  allCountries: Countries[] = [];
  correctAnswer: boolean = false;
  incorrectAnswer: string = '';
  showButton: boolean = false;
  optionSelected: Countries = { cca2: '' };
  points: number = 0;
  disabledOptions: boolean = false;

  @Output() onItem: EventEmitter<number> = new EventEmitter();
  @Output() onPoints: EventEmitter<number> = new EventEmitter();

  constructor(private _quizService: QuizService) { }

  async ngOnInit(): Promise<void> {
    this.allCountries = await lastValueFrom(this._quizService.getAllCountries());
    this.allCountries = this.allCountries.map(item => ({ name: item.name!, cca2: item.cca2, capital: item.capital, continents: item.continents, flags: item.flags }));
    this.oneRandomCountry();
    this.item += 1;
    this.fourRandomCountries();
  }

  changeCountry() {
    this.item += 1;
    this.onItem.emit(this.item);
    this.oneRandomCountry();
    this.fourRandomCountries();
  }

  fourRandomCountries() {
    this.showButton = false;
    this.disabledOptions = false;
    this.fourCountries = [];
    this.fourCountries.push(this.oneCountry);
    for (let i = 0; i < 3; i++) {
      this.fourCountries.push(this.allCountries[Math.round(Math.random() * this.allCountries.length)]);
    }
    this.fourCountries = Array.from(this.fourCountries);
    this.randomTypeQuestion();
  }

  oneRandomCountry() {
    this.oneCountry = this.allCountries[Math.round(Math.random() * this.allCountries.length)];
    console.log(this.oneCountry)
  }

  randomTypeQuestion() {
    this.questionType = Math.round(Math.random() * 1);
  }

  selectedOption() {

    this.disabledOptions = true;
    if (this.optionSelected.name?.common === this.oneCountry.name?.common) {
      this.points += 1;
      this.correctAnswer = true;
    }



    this.onPoints.emit(this.points);
    this.showButton = true;

    console.log(this.optionSelected)
  }



}
