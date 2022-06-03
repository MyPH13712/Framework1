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
    this.onGetList()
  }
  onGetList() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data
    })
  }

  onDelete(_id: number) {
    const confirmDel = confirm('Do you want to delete ?');
    if (confirmDel && _id) {
      this.productService.deleteProduct(_id).subscribe((data) => {
        console.log(data);
        this.onGetList()
      })
    }
  }

}
