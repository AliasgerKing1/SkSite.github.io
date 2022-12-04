import { FormGroup } from '@angular/forms';

export let PassCheck = () => {
  return function (pass: FormGroup) {
    let checkpass = pass.controls['password'];
    let checkrepass = pass.controls['re_password'];
    if (checkpass.errors && !checkpass.errors['passErr']) {
      return;
    }

    if (checkpass.value != checkrepass.value) {
      checkrepass.setErrors({ passErr: true });
    }
  };
};
