import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.css']
})
export class HomeClientComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService) {
    this.products = []
  }

  ngOnInit(): void {
    this.onGetList()
  }
  onGetList() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data
    })
  }

}
