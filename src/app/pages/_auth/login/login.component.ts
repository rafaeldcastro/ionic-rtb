import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthBaseView } from '../shared/classes/auth-base-view';

/**NOTIFICATIONS */
import { LoadingNotifications } from '@core/components/loading/notifications/loading.notifications';

/**SERVICES */
import { AuthService } from '@shared/services/_auth/auth.service';
import { EventEmitterService } from '@shared/services/emitter/event-emitter.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginPageComponent extends AuthBaseView {

  showHidePass = true;

  constructor(
    protected router: Router,
    protected authService: AuthService
  ) {
    super(router, authService);

    this.form = new FormGroup({
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
    });

  }

  onSubmit() {
    super.onSubmit();

    EventEmitterService.get(LoadingNotifications.PRESENT).emit();

    this.authService.login(this.formcontrol.email.value, this.formcontrol.password.value)
      .then(resp => {
        this.authService.currentUserValue = resp;
        EventEmitterService.get(LoadingNotifications.DISMISS).emit();
        this.navigateTo('HOME');
      })
      .catch(e => {
        console.log(e);
        EventEmitterService.get(LoadingNotifications.DISMISS).emit();
      });
  }
}
