import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { MAIN_TABS_ROUTES } from './main-tabs-routes';

/** MODULES */
import { SharedModule } from '@shared/shared.module';

/** COMPONENTS */
import { MainTabsComponent } from './main-tabs.component';

@NgModule({
  declarations: [
    MainTabsComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    MAIN_TABS_ROUTES,
    SharedModule
  ],
  exports: [
    MainTabsComponent
  ]
})
export class MainTabsModule {}
