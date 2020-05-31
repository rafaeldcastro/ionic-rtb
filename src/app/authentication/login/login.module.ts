import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { LoginPage } from './login.page';

import { ComponentsModule } from '../../shared/components/components.module';

@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginPage
      }
    ])
  ]
})
export class LoginPageModule {}
