import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  CheckForm = false;

  errMsg = '';
  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _auth: AuthService
  ) {
    this.LoginForm = this._fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      remember: [''],
    });
  }

  save() {
    if (this.LoginForm.invalid) {
      this.CheckForm = true;
      return;
    }

    this._auth.doLogin(this.LoginForm.value).subscribe((result) => {
      console.log(result);
      if (result.success) {
        localStorage.setItem('token', result.token);
        this._router.navigate(['/email']);
      } else {
        if (result.errType == 1) {
          this.errMsg = 'This email/Username is not Registered !';
        }
        if (result.errType == 2) {
          this.errMsg = 'This password is incorrect !';
        }
      }
    });
  }
  ngOnInit(): void {}
}
