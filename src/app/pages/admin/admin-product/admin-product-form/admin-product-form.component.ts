import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm: FormGroup;

  constructor(
    private productService: ProductService,
    private router: Router
    ) {
    this.productForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
        this.onValNameHasPro
      ]),
    })
  }

  ngOnInit(): void {
  }
  onValNameHasPro(control: AbstractControl): ValidationErrors | null {
    const { value } = control;

    if (!value.includes('product')) {
      return { hasProductError: true }
    }
    return null

  }
  onSubmit() {
    console.log(this.productForm.get('name'));
    const submitData = this.productForm.value
    this.productService.createProduct(submitData).subscribe((data)=>{
      this.router.navigateByUrl('/admin/products')
    })
  }

}
