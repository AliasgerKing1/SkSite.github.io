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
  AdminLoginForm: FormGroup;
  CheckForm = false;
  errMsg = '';
  constructor(
    private _fb: FormBuilder,
    private _auth: AuthService,
    private _router: Router
  ) {
    this.AdminLoginForm = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submit() {
    if (this.AdminLoginForm.invalid) {
      this.CheckForm = true;
      return;
    }
    this._auth.doLogin(this.AdminLoginForm.value).subscribe((result) => {
      if (result.success) {
        localStorage.setItem('admin_token', result.token);
        this._router.navigate(['/admin/dashboard']);
      } else {
        if (result.errType == 1) {
          this.errMsg = 'this Username or Password is Inorrect !';
        }
        if (result.errType == 2) {
          this.errMsg = 'thisPassword is Inorrect !';
        }
      }
    });
  }

  ngOnInit(): void {}
}
