import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);

  addToCart(product: Product){
   this.cart.update((cart)=>{
     return [...cart, product];
   });
  }
  constructor() { }
}
