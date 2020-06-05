import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

import { ComponentsModule } from './../../shared/components/components.module';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ]
})
export class HomePageModule {}
