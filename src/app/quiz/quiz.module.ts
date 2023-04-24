import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardQuestionComponent } from './components/card-question/card-question.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CardResultComponent } from './components/card-result/card-result.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CardQuestionComponent,
    CardResultComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimeNgModule,
  ],
  exports: [
    CardQuestionComponent,
    CardResultComponent
  ]
})
export class QuizModule { }
