import { Component, input } from '@angular/core';

@Component({
  selector: 'app-primary-btn',
  imports: [],
  templateUrl: './primary-btn.component.html',
  styleUrl: './primary-btn.component.scss'
})
export class PrimaryBtnComponent {
  lableName = input('');
  
}
