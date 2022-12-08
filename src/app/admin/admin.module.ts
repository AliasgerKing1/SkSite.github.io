import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductlistComponent } from './pages/productlist/productlist.component';
import { ProductDetailsListComponent } from './pages/product-details-list/product-details-list.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    HeaderComponent,
    AddProductComponent,
    LoginComponent,
    ProfileComponent,
    OrdersComponent,
    ProductlistComponent,
    ProductDetailsListComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule],
})
export class AdminModule {}
