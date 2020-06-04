import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { appRoutesNames } from '../../shared/_routes-names/routes-names.index';

/**SERVICES */
import { AuthService } from './../../shared/services/_auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: 'sign-up.page.html',
  styleUrls: ['sign-up.page.scss'],
})
export class SignUpPage {

  ionicForm: FormGroup;
  loadingMini = false;
  isSubmitted = false;

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private formBuilder: FormBuilder
  ) {

    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
    })
  }

  submitForm() {

    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.ionicForm.value)
    }
  }

  private goHome() {
    this.navCtrl.navigateRoot(`${appRoutesNames.PAGES.route}`);
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

}
