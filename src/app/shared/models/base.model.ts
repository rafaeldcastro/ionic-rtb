export class BaseModel {

    public set(attrs: Object): any {

        for (let i in attrs) {
            this[i] = attrs[i];
        }

    }

    public get(attr: string): any {

        return this[attr];

    }

    public reset(): any {

        for (let key in this) {
            if (typeof this[key] != "function") {
                this[key] = null;
            }
        }

    }

}