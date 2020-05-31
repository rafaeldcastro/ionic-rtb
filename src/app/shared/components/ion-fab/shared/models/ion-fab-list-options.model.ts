// import { BaseModel } from "../base.model";
import { IonFabButtonOptions } from './ion-fab-button-options.model';

export class IonFabListOptions/* extends BaseModel */ {

    side: string;
    listFabButtons: IonFabButtonOptions[] = [];

    constructor(data: Object = {}) {
        this.set(data);
    }

    private set(attrs: Object): any {

        for (let i in attrs) {
            this[i] = attrs[i];
        }

    }

}