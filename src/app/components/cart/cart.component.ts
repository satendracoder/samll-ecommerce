import { CartService } from './../../services/cart.service';
import { Component, inject } from '@angular/core';
import { CartItemComponent } from "../cart-item/cart-item.component";
import { OrderSummaryComponent } from "../../pages/cart/order-summary/order-summary.component";

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, OrderSummaryComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  CartService = inject(CartService);
}
