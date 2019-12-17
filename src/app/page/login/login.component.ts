import { Component } from '@angular/core';
import { LogService } from '@app/core/log.service';
import { SpinService } from '@app/custom/spin/spin.service';
import { SnackService } from '@app/custom/snack/snack.service';
import { CoreService } from '@app/core/core.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '@app/page/login/login.service';
import { UserStatus } from './login';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  userStatus: UserStatus;

  constructor(
    private log: LogService,
    public core: CoreService,
    private router: Router,
    private snack: SnackService,
    private builder: FormBuilder,
    private login: LoginService
  ) {
    log.construct(this.constructor.name);
    this.form = builder.group({
      username: builder.control(null, Validators.required),
      password: builder.control(null, Validators.required)
    });
  }

  onSubmit() {
    this.core.loggedInUser = this.form.get('username').value.toLowerCase();
    if (this.form.get('username').value.toLowerCase() == 'manager') {
      this.router.navigate(['dashboard'])
      this.core.user = this.form.get('username').value.toLowerCase();
    } else if (this.form.get('username').value.toLowerCase() === 'chefindian' || this.form.get('username').value.toLowerCase() === 'chefitalian' || this.form.get('username').value.toLowerCase() === 'chefbakery') {
      this.core.user = this.form.get('username').value.toLowerCase();
      this.router.navigate(['chefdashboard'])
    }
    else {
      this.snack.open('Invalid Credentials')
    }
  }
}