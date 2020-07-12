import { BaseModel } from '@core/models/base.model';

export class DropdownOptions extends BaseModel {
    header: string;
    icon: string;
    menu: DropdownItem[];

    constructor(data: Object = {}) {
        super();
        this.set(data);
    }
}

export class DropdownItem extends BaseModel {
    icon: string;
    label: string;
    route: string;
    payload: any;

    constructor(data: Object = {}) {
        super();
        this.set(data);
    }
}