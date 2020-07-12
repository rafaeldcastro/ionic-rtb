import { Component } from '@angular/core';
import { CoreBaseView } from '@app/_core/classes/core-base-view';

@Component({
  selector: 'main-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent extends CoreBaseView{

  constructor() {
    super();
  }

  ionViewDidEnter(){
    this.setPageTitle(this.mainRoutes.CONTACT.label);
  }

}
