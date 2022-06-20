import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProductCart } from '../types/Product';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  private storageSubject = new Subject<string>()

  watchStorage(): Observable<any> {
    return this.storageSubject.asObservable()
  }
  getItem() {
    return JSON.parse(localStorage.getItem('cart') || '[]')
  }
  setItem(addItem: ProductCart) {
    const cartItems = this.getItem();
    const existItem = cartItems.find((item: ProductCart) =>
      item._id === addItem._id
    );
    if (!existItem) {
      cartItems.push(addItem);
    } else {
      existItem.value += addItem.value;
    }
    localStorage.setItem('cart', JSON.stringify(cartItems));
    this.storageSubject.next('');
  }
  removeItem(_id: string) {
    const cartItems = this.getItem();
    const afterCart = cartItems.filter((item: ProductCart) => item._id !== _id);
    localStorage.setItem('cart', JSON.stringify(afterCart));
  }
  decreaseQuantity(_id: string) {
    var cartItems = this.getItem();
    const currentProduct = cartItems.find((item: ProductCart) => item._id === _id);
    currentProduct.value--;
    if (currentProduct.value < 1) {
      const confirm = window.confirm("Bạn có muốn xóa sản phẩm không?");
      if (confirm) {
        cartItems = cartItems.filter((item: ProductCart) => item._id !== _id);
      }
    }
    localStorage.setItem('cart', JSON.stringify(cartItems));
    this.storageSubject.next('');
  }
  increaseQuantity(_id: string) {
    var cartItems = this.getItem();
    cartItems.find((item: ProductCart) => item._id === _id).value++;
    localStorage.setItem('cart', JSON.stringify(cartItems));
    this.storageSubject.next('');
  }

}
