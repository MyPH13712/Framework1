import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { ProductCart } from '../types/Product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartItems: ProductCart[];
  cartItemValues: number = 0;
  cartTotal: number = 0
  constructor(private lsService: LocalStorageService) {
    this.cartItems = []
  }

  ngOnInit(): void {
    this.onGetCart();
    this.lsService.watchStorage().subscribe(data => {
      console.log(data);
      this.onGetCart();
    })
    this.cartItemValues = this.cartItems.reduce((a, b) => a + b.value, 0);
  }
  onGetCart() {
    this.cartTotal = 0
    this.cartItems = this.lsService.getItem();
    this.cartItemValues = this.cartItems.reduce((a, b) => a + b.value, 0);

    for (let i = 0; i < this.cartItems.length; i++) {
      this.cartTotal += (this.cartItems[i].price - this.cartItems[i].price) * this.cartItems[i].value
    }
    console.log(this.cartItemValues);
  }
  onRemove(id:string){
    this.lsService.removeItem(id)
    this.onGetCart()
  }
  up(id:string){
    this.lsService.increaseQuantity(id)
    this.onGetCart()
  }
  down(id:string){
    this.lsService.decreaseQuantity(id)
    this.onGetCart()
  }
}
