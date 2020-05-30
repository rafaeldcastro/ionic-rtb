import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { SignUpPage } from './sign-up.page';

@NgModule({
  declarations: [
    SignUpPage
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: SignUpPage
      }
    ])
  ]
})
export class SignUpPageModule {}
