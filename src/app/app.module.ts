import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowValidateComponent } from './components/show-validate/show-validate.component';
import { ProductClientComponent } from './pages/client/product-client/product-client.component';
import { AboutClientComponent } from './pages/client/about-client/about-client.component';
import { ProductDetailComponent } from './pages/client/product-detail/product-detail.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeClientComponent } from './pages/client/home-client/home-client.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component'

import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/auth/login/login.component';
import { CartComponent } from './cart/cart.component';
import { AdminCategoryListComponent } from './pages/admin/admin-category/admin-category-list/admin-category-list.component';
import { AdminCategoryFormComponent } from './pages/admin/admin-category/admin-category-form/admin-category-form.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { AdminUserListComponent } from './pages/admin/admin-user/admin-user-list/admin-user-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowValidateComponent,
    ProductClientComponent,
    AboutClientComponent,
    ProductDetailComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    HomeClientComponent,
    AdminProductListComponent,
    AdminProductDetailComponent,
    AdminProductFormComponent,
    LoginComponent,
    CartComponent,
    AdminCategoryListComponent,
    AdminCategoryFormComponent,
    SignupComponent,
    AdminUserListComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
