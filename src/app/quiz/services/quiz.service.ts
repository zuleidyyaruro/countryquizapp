import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Countries } from '../interfaces/quiz.interface';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private url: string = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<Countries[]> {
    return this.http.get<Countries[]>(this.url + '/all');
  }
}
