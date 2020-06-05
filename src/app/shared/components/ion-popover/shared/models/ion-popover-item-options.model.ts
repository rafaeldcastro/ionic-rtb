
export class IonPopoverItemOptions {

    label;
    icon;
    notification;

    constructor(data: Object = {}) {
        this.set(data);
    }

    private set(attrs: Object): any {

        for (let i in attrs) {
            this[i] = attrs[i];
        }

    }

}