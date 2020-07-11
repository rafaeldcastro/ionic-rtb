import { NgModule } from '@angular/core';

/** MODULES */
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

/** COMPONENTS */
import { SignupPageComponent } from './signup.component';

@NgModule({
  declarations: [
    SignupPageComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: SignupPageComponent
      }
    ])
  ],
  exports: [
    SignupPageComponent
  ]
})
export class SignupPageModule {}
