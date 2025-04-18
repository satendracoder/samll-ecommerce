import { Product } from './../../models/products';
import { Component, inject, input } from '@angular/core';
import { SecondaryBtnComponent } from "../../shared/components/button/secondary-btn/secondary-btn.component";
import { CartService } from '../../services/cart.service';
import { OrderSummaryComponent } from "../../pages/cart/order-summary/order-summary.component";

@Component({
  selector: 'app-cart-item',
  imports: [SecondaryBtnComponent],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {

  item = input.required<Product>();

  CartService = inject(CartService);
  
}
