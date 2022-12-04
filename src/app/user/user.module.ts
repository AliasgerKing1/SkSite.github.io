import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { EmailComponent } from './pages/email/email.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    UserComponent,
    IndexComponent,
    LoginComponent,
    HeaderComponent,
    EmailComponent,
    ProfileComponent,
  ],
  imports: [CommonModule, UserRoutingModule, ReactiveFormsModule],
})
export class UserModule {}
