import { NgModule } from '@angular/core';

/** MODULES */
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

/** COMPONENTS */
import { LoginPageComponent } from './login.component';

@NgModule({
  declarations: [
    LoginPageComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginPageComponent
      }
    ])
  ],
  exports: [
    LoginPageComponent
  ]
})
export class LoginPageModule {}
