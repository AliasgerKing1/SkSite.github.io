import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { PassCheck } from 'src/app/helpers/Coustom-Validations';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  SignupForm: FormGroup;
  CheckForm = false;
  p = 'eye';
  sh = 'password';

  constructor(
    private _fb: FormBuilder,
    private _user: UserService,
    private _router: Router
  ) {
    this.SignupForm = this._fb.group(
      {
        fname: ['', Validators.required],

        lname: ['', Validators.required],

        email: ['', Validators.required, Validators.email],

        password: ['', Validators.required],
        re_password: ['', Validators.required],

        country: ['', Validators.required],

        terms: ['', Validators.required],
      },
      {
        validator: [PassCheck()],
      }
    );
  }

  save() {
    if (this.SignupForm.invalid) {
      this.CheckForm = true;
      return;
    }
    this._user.AddUser(this.SignupForm.value).subscribe((result) => {
      this._router.navigate(['/email']);
    });
  }

  show() {
    this.p = this.p == 'eye' ? 'slash-eye' : 'eye';
    this.sh = this.sh == 'password' ? 'text' : 'password';
  }

  ngOnInit(): void {}
}
