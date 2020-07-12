// import { BaseModel } from "../base.model";

export class IonFabButtonOptions/* extends BaseModel */ {

    icon: string;
    color: string;
    label: string;
    notification: string;

    constructor(data: Object = {}) {
        this.set(data);
    }

    private set(attrs: Object): any {

        for (let i in attrs) {
            this[i] = attrs[i];
        }

    }

}