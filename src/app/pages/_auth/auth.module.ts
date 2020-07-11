import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AUTH_ROUTES } from './auth-routes';

/** COMPONENTS */
import { AuthPagesComponent } from './auth.component';

@NgModule({
  declarations: [
    AuthPagesComponent,
  ],
  imports: [
    CommonModule,
    AUTH_ROUTES
  ],
  exports: [
    AuthPagesComponent
  ]
})
export class AuthPagesModule {}
