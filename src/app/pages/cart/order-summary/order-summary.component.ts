import { CommonModule } from '@angular/common';
import { CartService } from './../../../services/cart.service';
import { Component, computed, inject } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  imports: [CommonModule],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss'
})
export class OrderSummaryComponent {

  CartService = inject(CartService);

  total = computed(() => {
    let total = 0;
    for(const item of this.CartService.cart()){
      total += item.price;
    }
    return total;
  });

}
