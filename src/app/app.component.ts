import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

/**SERVICES */
import { Util } from '@core/services/util.service';

@Component({
  selector: 'app-root',
  template: `
  <ion-app>
    <app-loading></app-loading>  
    <ion-router-outlet></ion-router-outlet>
  </ion-app>
  `
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private UTIL: Util
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if(this.UTIL.isMobilePlatform()){
        this.initMobileFeatures();
      }
    });
  }
  
  private initMobileFeatures(){
    this.statusBar.styleDefault();
    this.splashScreen.hide();
  }
  
}