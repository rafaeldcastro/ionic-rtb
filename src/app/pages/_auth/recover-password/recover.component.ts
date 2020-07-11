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
  selector: 'app-recover-password-page',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss']
})
export class RecoverPasswordPageComponent extends AuthBaseView {

  showHidePass = true;

  constructor(
    protected router: Router,
    protected authService: AuthService
  ) {
    super(router, authService);

    this.form = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])
    });

  }

  onSubmit() {
    super.onSubmit();

    EventEmitterService.get(LoadingNotifications.PRESENT).emit();

    this.authService.recoverPassword(this.formcontrol.email.value)
      .then(resp => {
        this.authService.currentUserValue = resp;
        EventEmitterService.get(LoadingNotifications.DISMISS).emit();
        this.navigateTo('HOME');
      })
      .catch(e => {
        EventEmitterService.get(LoadingNotifications.DISMISS).emit();
        console.log(e);
      });
  }
}