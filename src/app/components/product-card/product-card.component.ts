import { CartService } from './../../services/cart.service';
import { Component, inject, input, signal } from '@angular/core';
import { Product } from '../../models/products';
import { CommonModule } from '@angular/common';
import { PrimaryBtnComponent } from "../../shared/components/button/primary-btn/primary-btn.component";

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, PrimaryBtnComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  
  CartService = inject(CartService);

  product = input.required<Product>(); 

  showAddToCard(){
    console.log('add to cart clicked');
  }
}
