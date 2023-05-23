import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breed-pill',
  templateUrl: './breed-pill.component.html',
  styleUrls: ['./breed-pill.component.css'],
})
export class BreedPillComponent {
  @Input() cover: string = '';
  @Input() coverLabel: string = '';
  @Input() key: string = '';
}
