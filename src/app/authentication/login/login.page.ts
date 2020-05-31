import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { appRoutesNames } from '../../shared/_routes-names/routes-names.index';

/**SERVICES */
import { AuthService } from './../../shared/services/_auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit{


  constructor(
    private authService: AuthService,
    private navCtrl: NavController
  ) {

  }

  ngOnInit(){
    if (this.authService.currentUserValue) {
      this.goHome();
    }
  }

  private goHome(){
    this.navCtrl.navigateRoot(`${appRoutesNames.PAGES.route}`);
  }

}
