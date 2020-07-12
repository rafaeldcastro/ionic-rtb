import { Component } from '@angular/core';
import { CoreBaseView } from '@core/classes/core-base-view';

@Component({
  selector: 'app-main-tabs',
  templateUrl: './main-tabs.component.html'
})
export class MainTabsComponent extends CoreBaseView{

  constructor() {
    super(); 
  }

}
