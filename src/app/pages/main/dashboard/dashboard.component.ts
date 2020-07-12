import { Component } from '@angular/core';
import { CoreBaseView } from '@app/_core/classes/core-base-view';

@Component({
  selector: 'main-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends CoreBaseView{

  constructor() {
    super();
  }

  ngOnInit(){
    this.setPageTitle(this.mainRoutes.DASHBOARD.label);
  }

}
