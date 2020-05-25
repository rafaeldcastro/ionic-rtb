import { Component } from '@angular/core';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-splash',
  templateUrl: 'splash.page.html',
  styleUrls: ['splash.page.scss'],
})
export class SplashPage {

  constructor(private iab: InAppBrowser) {}

  goInAppBrowser(){
    const browser = this.iab.create('http://mpnaescola.mplabs.com.br/#/p/dashboard');
  }

}
