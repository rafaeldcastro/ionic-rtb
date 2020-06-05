import { Injectable } from '@angular/core';
import { PopoverController } from '@ionic/angular';

/**MODELS */
import { IonPopoverOptions } from './../models/ion-popover-options.model';

/**COMPONENTS */
import { IonPopoverComponent } from './../../ion-popover.component';

@Injectable({ providedIn: 'root' })
export class PopoverService {

    constructor(private popoverController: PopoverController) { }

    async present(anchor, options: IonPopoverOptions) {

        const popover = await this.popoverController.create({
            component: IonPopoverComponent,
            componentProps: {ionPopoverOptions: options},
            cssClass: options.customClasses,
            event: anchor,
            translucent: true
        });
        return await popover.present();

    }

    dismiss() {
        this.popoverController.dismiss();
    }
}
