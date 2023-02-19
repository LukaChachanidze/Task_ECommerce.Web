import { Component } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  products?: Product[];

  constructor(
    private cartService : CartService
  ) { }

  ngOnInit(): void {
    this.getCartItems();
  }
  getCartItems(){
     this.cartService.getCartByUserId().subscribe((x) => {
      this.products = x;
    });
  }

  removeCartItem(itemId: number){
    this.cartService.removeProductFromCart(itemId).subscribe(() => {
      this.getCartItems();
    });
  }
}
