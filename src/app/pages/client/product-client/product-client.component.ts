import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Category } from 'src/app/types/Category';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-product-client',
  templateUrl: './product-client.component.html',
  styleUrls: ['./product-client.component.css']
})
export class ProductClientComponent implements OnInit {
  _id: string
  products: Product[];
  category: Category[]
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.products = []
    this.category = []
    this._id = ''
  }

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe((data) => {
      this.category = data;
    })
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    })
    // this._id = this.activateRoute.snapshot.params['_id']
    // console.log(this._id);
    
    // this.productService.getProductFilter(this._id).subscribe((data) => {
    //   this.products = data;
    //   console.log(this.products);
    // })
  }
  onListCate(_id: string) {
    this.productService.getProductFilter(_id).subscribe((data) => {
      this.products = data
    })
  }
  onSelect(_id: string) {
    this.onListCate(_id),
      this.router.navigateByUrl(`/products/${_id}`)
  }
 
}
