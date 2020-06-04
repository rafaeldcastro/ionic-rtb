import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComponentsModule } from '../../shared/components/components.module';

import { SignUpPage } from './sign-up.page';

@NgModule({
  declarations: [
    SignUpPage
  ],
  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: SignUpPage
      }
    ])
  ]
})
export class SignUpPageModule {}
