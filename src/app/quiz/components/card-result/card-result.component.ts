import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-result',
  templateUrl: './card-result.component.html',
  styleUrls: ['./card-result.component.css']
})
export class CardResultComponent {

  @Input() points: number = 0;

  reloadCurrentPage() {
    window.location.reload();
  }

}
