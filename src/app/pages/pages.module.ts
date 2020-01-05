import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PAGES_ROUTES } from './pages-routes';

import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    RouterModule,
    IonicModule,
    PAGES_ROUTES,
    CommonModule
  ],
  exports: [
    PagesComponent,
  ]
})
export class PagesModule { }
