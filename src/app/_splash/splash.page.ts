import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { appRoutesNames } from '../shared/_routes-names/routes-names.index';

/**SERVICES */
import { LoadingNotifications } from '../shared/_notifications/notification.index';
import { EventEmitterService } from './../shared/services/emitter/event-emitter.service';

@Component({
  selector: 'app-splash',
  templateUrl: 'splash.page.html',
  styleUrls: ['splash.page.scss'],
})
export class SplashPage implements OnInit{

  constructor(
    private navCtrl: NavController
  ) {}

  ngOnInit(){
    EventEmitterService.get(LoadingNotifications.PRESENT).emit();
    setTimeout(() => {
      EventEmitterService.get(LoadingNotifications.DISMISS).emit();
      this.navCtrl.navigateRoot(`${appRoutesNames.AUTHENTICATION.route}`);
    }, 2200);
  }

}
