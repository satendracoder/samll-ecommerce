import { Component, inject } from '@angular/core';
import { PrimaryBtnComponent } from "../../shared/components/button/primary-btn/primary-btn.component";
import { CartService } from '../../services/cart.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductListComponent } from "../product-list/product-list.component";

@Component({
  selector: 'app-header',
  imports: [PrimaryBtnComponent, RouterLink, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  cartService = inject(CartService);

  showBtnChecked(){
    console.log("Please Checked");
  }
}
