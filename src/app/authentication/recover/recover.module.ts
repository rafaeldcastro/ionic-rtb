import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { RecoverAcessPage } from './recover.page';

@NgModule({
  declarations: [
    RecoverAcessPage
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: RecoverAcessPage
      }
    ])
  ]
})
export class RecoverPageModule {}
