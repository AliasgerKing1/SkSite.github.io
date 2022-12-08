import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from '../user/pages/email/email.component';
import { AntiAuthGuard } from './guards/anti-auth.guard';
import { AuthGuard } from './guards/auth.guard';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductDetailsListComponent } from './pages/product-details-list/product-details-list.component';
import { ProductlistComponent } from './pages/productlist/productlist.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [AntiAuthGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-product',
    component: AddProductComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-product/edit/:id',
    component: AddProductComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'product/orders',
    component: OrdersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'product/list',
    component: ProductlistComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'product/details',
    component: ProductDetailsListComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
