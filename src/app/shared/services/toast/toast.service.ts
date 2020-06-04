import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

interface ToastButton {
    side,
    icon,
    text,
    role,
    notification
}

interface ToastOptions {
    header,
    duration,
    message,
    position,
    color,
    customClass,
    buttons: ToastButton[]
}

import { EventEmitterService } from './../emitter/event-emitter.service';

@Injectable({ providedIn: 'root' })
export class ToastService {

    constructor(private toastController: ToastController) { }

    /**
    * 
    * @param options : {
    *       header: string,
    *       duration: number | 2000,
    *       message: string,
    *       position: string | 'bottom',
    *       buttons: ToastButton[ ]
    * }
    */
    async present(options) {      

        let toastOptions: ToastOptions = options;

        const toast = await this.toastController.create({
            header: toastOptions.header,
            duration: Number(toastOptions.duration),
            message: toastOptions.message,
            position: toastOptions.position || 'bottom',
            color: toastOptions.color || 'light',
            cssClass: toastOptions.customClass
        });

        if(toastOptions.buttons){
            toast.buttons = [];

            for (let i = 0; i < toastOptions.buttons.length; i++) {
                toast.buttons.push({
                    side: toastOptions.buttons[i].side,
                    icon: toastOptions.buttons[i].icon,
                    text: toastOptions.buttons[i].text,
                    role: toastOptions.buttons[i].role || 'cancel',
                    handler: () => {
                        EventEmitterService.get(toastOptions.buttons[i].notification).emit();
                    }
                });
            }
        }


        toast.present();
    }

    dismiss(){
        this.toastController.dismiss();
    }
}

/**
 * USE
 * 
 * this.toastService.present({
        header: 'Header',
        duration: 2000,
        message: 'Teste',
        position: 'bottom', 
        color: 'warning',
        customClass: 'className',
        buttons: [
          {
            side: 'start',
            icon: 'add',
            text: 'Plus',
            role: 'cancel',
            notification: notification.name
          }
        ]
      });
 */