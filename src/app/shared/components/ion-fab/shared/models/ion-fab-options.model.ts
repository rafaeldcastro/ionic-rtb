// import { BaseModel } from "../base.model";
import { IonFabButtonOptions } from './ion-fab-button-options.model';
import { IonFabListOptions } from './ion-fab-list-options.model';

export class IonFabOptions/* extends BaseModel */ {

    horizontal: string;
    vertical: string;
    edge: boolean;
    slot: string;
    activated: boolean;
    customClasses: string;

    actionFabButton: IonFabButtonOptions = new IonFabButtonOptions();

    fabList: IonFabListOptions = new IonFabListOptions();

    constructor(data: Object = {}) {
        this.set(data);
    }

    private set(attrs: Object): any {

        for (let i in attrs) {
            this[i] = attrs[i];
        }

    }

}