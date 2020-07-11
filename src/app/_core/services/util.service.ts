import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Util {

    constructor(
        private platform: Platform
    ) { }

    /**Return true if the running platform is on cordova, check for 'cordova'; or capacitor/cordova, check for 'hybrid' */
    isMobilePlatform(): boolean {
        if (this.platform.is('cordova') || this.platform.is('hybrid')) return true;
        return;
    }
}
