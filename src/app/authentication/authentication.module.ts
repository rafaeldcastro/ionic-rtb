import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AUTH_PAGES_ROUTES } from './authentication-routes';

import { AuthenticationComponent } from './authentication.component';

@NgModule({
  declarations: [
    AuthenticationComponent,
  ],
  imports: [
    RouterModule,
    IonicModule,
    AUTH_PAGES_ROUTES,
    CommonModule
  ],
  exports: [
    AuthenticationComponent,
  ]
})
export class AuthenticationModule { }
