import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from "./components/product-list/product-list.component";


@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'samll-ecommerce';
}
