import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { take } from 'rxjs/operators';

import { appRoutesNames } from '../../shared/_routes-names/routes-names.index';
import { authenticationRoutesNames } from './../authentication-routes-names';

/**SERVICES */
import { AuthService } from './../../shared/services/_auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  loginForm: FormGroup;
  loadingMini = false;
  isSubmitted = false;
  errorMessage;
  fieldTextType = false;

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private formBuilder: FormBuilder
  ) {
    if (this.authService.currentUserValue) {
      this.navigateTo('home');
    }

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  submitForm() {

    this.isSubmitted = true;

    if (!this.loginForm.valid) {
      console.log('Please provide all the required values!');
      return false;

    } else {
      this.loadingMini = true;

      this.authService.login(this.errorControl.username.value, this.errorControl.password.value)
        .pipe(take(1))
        .subscribe(
          data => {
            console.log(data)
            this.navigateTo('home');
          },
          error => {
            this.errorMessage = error;
            this.loadingMini = false;
          });
    }
  }

  private navigateTo(page) {
    let route;

    switch(page){
      case 'home': this.navCtrl.navigateRoot(appRoutesNames.PAGES.route); return;
      case 'signup': route = `${appRoutesNames.AUTHENTICATION.route}/${authenticationRoutesNames.SIGN_UP.route}`; break;
      case 'recover': route = `${appRoutesNames.AUTHENTICATION.route}/${authenticationRoutesNames.RECOVER.route}`; break;
    }

    this.navCtrl.navigateForward(route);
  }

  get errorControl() {
    return this.loginForm.controls;
  }

  fillForm(){
    this.loginForm.controls.username.setValue('username');
    this.loginForm.controls.password.setValue('password');
  }

  seePassword(){
    this.fieldTextType = !this.fieldTextType;
  }

}
