import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/types/Product';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {
  products: Product[];
  product: Product;
  _id: string;

  constructor(private productService: ProductService) {
    this.product = {
      _id: "",
      author: "",
      name: "",
      price: 0,
      img: "",
      sale_price: 0,
      desc: "",
      category: "",
      status: 0
    }
    this.products = [];
    this._id = ''
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    })
    console.log(this.products);
  }
  onGetList() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data
    })
  }

  onDelete(_id: string) {
    const confirmDel = confirm('Do you want to delete ?');
    if (confirmDel && _id) {
      this.productService.deleteProduct(_id).subscribe((data) => {
        console.log(data);
        this.onGetList()
      })
    }
  }
}
