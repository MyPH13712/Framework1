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

  constructor(private productService: ProductService) {
    this.products = []
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data
    })
  }

}
