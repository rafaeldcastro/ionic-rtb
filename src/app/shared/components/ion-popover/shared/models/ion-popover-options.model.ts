import { IonPopoverItemOptions } from './ion-popover-item-options.model';

export class IonPopoverOptions/* extends BaseModel */ {

    customClasses;
    buttons: IonPopoverItemOptions[];

    constructor(data: Object = {}) {
        this.set(data);
    }

    private set(attrs: Object): any {

        for (let i in attrs) {
            this[i] = attrs[i];
        }

    }

}