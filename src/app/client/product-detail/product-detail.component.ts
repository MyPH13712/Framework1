import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product, ProductCart } from '../../types/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  _id: string;
  product: Product;
  cartValue: number
  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService
  ) {
    this._id = '';
    this.product = {
      _id: 0,
      name: ''
    };
    this.cartValue = 1
  }

  ngOnInit(): void {
  }
  onChangeCartVal(event: any) {
    this.cartValue = event.target.value
  }
  onAddToCart() {
    const addItem = {
      ...this.product,
      _id: '',
      value: +this.cartValue
    };

    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]')
    const existItem = cartItems.find((item: ProductCart) => item._id === addItem._id)
    if (!existItem) {
      cartItems.push(addItem);
    } else {
      existItem.value += addItem.value
    }
    console.log(cartItems);

    localStorage.setItem('cart', JSON.stringify(cartItems))
    this.cartValue = 1

  };
}
