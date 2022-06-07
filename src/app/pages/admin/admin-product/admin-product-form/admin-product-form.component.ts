import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm: FormGroup;
  proId: string;

  constructor(
    private productService: ProductService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.productForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
        this.onValNameHasPro
      ]),
    });
    this.proId = '0'
  }

  ngOnInit(): void {
    this.proId = this.activateRoute.snapshot.params['id']
    if (this.proId) {
      this.productService.getProduct(this.proId).subscribe(data => {
        this.productForm.patchValue({
          name: data.name
        });
      });
    }

  }
  onValNameHasPro(control: AbstractControl): ValidationErrors | null {
    const { value } = control;

    if (!value.includes('product')) {
      return { hasProductError: true }
    }
    return null

  }
  onSubmit(){
    console.log(this.productForm.value);
    
    const submitData = this.productForm.value;
    if(this.proId !== '0' || this.proId !== undefined){
      return this.productService.updateProduct(this.proId, submitData).subscribe(data => {
        this.router.navigateByUrl('/admin/products');
      })
    }
    return this.productService.createProduct(submitData).subscribe((data) => {
      this.router.navigate(['/admin', 'products'])
    })
    
  }


}
