import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-category-form',
  templateUrl: './admin-category-form.component.html',
  styleUrls: ['./admin-category-form.component.css']
})
export class AdminCategoryFormComponent implements OnInit {
  categoryForm: FormGroup;
  categoryId: string
  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private activateRoute: ActivatedRoute,
  ) {
    this.categoryForm = new FormGroup({
      name: new FormControl('')
    })
    this.categoryId = ""
  }
  ngOnInit(): void {
    this.categoryId = this.activateRoute.snapshot.params['_id'];
    console.log(this.categoryId);
    this.categoryService.getCate(this.categoryId).subscribe(data => {
      this.categoryForm.patchValue({
        name: data.name
      })
    })
  }
  onSubmit() {
    const submitData = this.categoryForm.value;
    console.log(submitData);
    
    if (this.categoryId !== '0' || this.categoryId !== undefined) {
      return this.categoryService.createCategory(submitData).subscribe((data) => {
  
        this.router.navigateByUrl('/admin/category');
      })
      

    }
    return this.categoryService.updateCategory(this.categoryId, submitData).subscribe(data => {
      this.router.navigateByUrl('/admin/category');
    });
  }
}