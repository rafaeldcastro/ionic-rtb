import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

/** MODULES */
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

/** COMPONENTS */
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent
      }
    ])
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {}
