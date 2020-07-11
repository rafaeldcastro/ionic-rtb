import { Component } from '@angular/core';

import { appRoutesNames } from '@app/app-routes-names';

@Component({
  selector: 'page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {

  appRoutes = appRoutesNames;

  constructor() {
  }
}
