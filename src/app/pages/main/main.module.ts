import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { MAIN_ROUTES } from './main-routes';

/** MODULES */
import { SharedModule } from '@shared/shared.module';

/** COMPONENTS */
import { MainPagesComponent } from './main.component';

@NgModule({
  declarations: [
    MainPagesComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    MAIN_ROUTES,
    SharedModule
  ],
  exports: [
    MainPagesComponent
  ]
})
export class MainPagesModule {}
