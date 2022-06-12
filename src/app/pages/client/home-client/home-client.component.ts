import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Category } from 'src/app/types/Category';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.css']
})
export class HomeClientComponent implements OnInit {
  _id: string
  products: Product[];
  category: Category[]
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router
  ) {

    this.products = []
    this.category = []
    this._id = ''
  }

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe((data) => {
      this.category = data
    })
    this.onGetList()
  }
  onListCate(_id: string){
    this.productService.getProductFilter(_id).subscribe((data) => {
      this.products = data
    })
  }
  onSelect(_id: string){
    this.onListCate(_id),
    this.router.navigateByUrl(`/product/${_id}`)
  }
  onGetList() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data
    })
  }

}
