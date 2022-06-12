import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutClientComponent } from './pages/client/about-client/about-client.component';
import { CanAccessAdminGuard } from './guards/can-access-admin.guard';
import { HomeClientComponent } from './pages/client/home-client/home-client.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ProductClientComponent } from './pages/client/product-client/product-client.component';
import { ProductDetailComponent } from './pages/client/product-detail/product-detail.component';
import { AdminCategoryListComponent } from './pages/admin/admin-category/admin-category-list/admin-category-list.component';
import { AdminCategoryFormComponent } from './pages/admin/admin-category/admin-category-form/admin-category-form.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { AdminUserListComponent } from './pages/admin/admin-user/admin-user-list/admin-user-list.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        component: HomeClientComponent,
      },
      {
        path: 'products',
        component: ProductClientComponent,
      },
      {
        path: 'product-detail/:_id',
        component: ProductDetailComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'about',
        component: AboutClientComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [CanAccessAdminGuard],
    children: [
      {
        path: 'products',
        children: [
          {
            path: '',
            component: AdminProductListComponent
          },
          {
            path: 'create',
            component: AdminProductFormComponent
          },
          {
            path: 'edit/:id',
            component: AdminProductFormComponent
          },
          {
            path: ':id',
            component: AdminProductDetailComponent
          },
        ]
      },
      {
        path: 'category',
        children: [
          {
            path: '',
            component:AdminCategoryListComponent
          },
          {
            path: 'create',
            component: AdminCategoryFormComponent
          },
          {
            path: 'edit/:id',
            component: AdminCategoryFormComponent
          }
        ]
      },
      {
        path: 'users',
        children: [
          {
            path: '',
            component: AdminUserListComponent
          }
        ]
      }
    ]
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanAccessAdminGuard]
})
export class AppRoutingModule { }
