import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { EventEmitterService } from '../emitter/event-emitter.service';

@Injectable({
    providedIn: 'root'
})
export class IonToastService {

    private toast;

    constructor(private toastController: ToastController) { }

    async present(msg: string, options?) {

        if (options) {
            this.presentToastWithOptions(msg, options);
            return;
        }

        this.toast = await this.toastController.create({
            message: msg,
            duration: 2000
        });
        this.toast.present();
    }

    dismiss() {
        this.toast = this.toast.dismiss();
    }

    private async presentToastWithOptions(msg, options) {
        let toastOptions = options;

        this.toast = await this.toastController.create({
            header: toastOptions.title,
            message: msg,
            color: options.type,
            position: toastOptions.position,
            buttons: [{
                icon: 'close',
                role: 'cancel',
                handler: () => {
                    if(toastOptions.notification){
                        EventEmitterService.get(toastOptions.notification).emit(toastOptions.payload);
                    }
                }
            }
            ]
        });
        this.toast.present();
    }




}
