import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-secondary-btn',
  imports: [],
  templateUrl: './secondary-btn.component.html',
  styleUrl: './secondary-btn.component.scss'
})
export class SecondaryBtnComponent {
  lableName = input('');
  
  btnClicked = output();

}
