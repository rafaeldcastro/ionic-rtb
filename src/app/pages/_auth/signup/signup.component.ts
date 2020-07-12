import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthBaseView } from '../shared/classes/auth-base-view';

/**VALIDATORS */
import { CustomValidators } from '../shared/validators/custom.validator';

/**NOTIFICATIONS */
import { LoadingNotifications } from '@core/components/loading/notifications/loading.notifications';

/**SERVICES */
import { AuthService } from '@shared/services/_auth/auth.service';
import { EventEmitterService } from '@shared/services/emitter/event-emitter.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupPageComponent extends AuthBaseView {

  showHidePass = true;

  constructor(
    protected router: Router,
    protected authService: AuthService,
    private fb: FormBuilder
  ) {
    super(router, authService);

    this.form = this.fb.group({
      'name': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'email': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
      'password': new FormControl('', [Validators.required, Validators.minLength(4)]),
      'confirm_password': new FormControl('', [Validators.required])
    }, {
      validator: CustomValidators.MustMath('password', 'confirm_password')
    });
  }

  onSubmit() {
    super.onSubmit();

    EventEmitterService.get(LoadingNotifications.PRESENT).emit();

    let user = {
      // name: this.formcontrol.name.value,
      email: this.formcontrol.email.value,
      password: this.formcontrol.password.value
    };
    this.authService.signUp(user)
      .then(resp => {
        this.authService.currentUserValue = resp;
        EventEmitterService.get(LoadingNotifications.DISMISS).emit();
        this.navigateTo('DASHBOARD');
      })
      .catch(e => {
        EventEmitterService.get(LoadingNotifications.DISMISS).emit();
        console.log(e);
      });
  }
}
