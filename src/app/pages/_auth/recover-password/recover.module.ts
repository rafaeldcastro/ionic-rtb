import { NgModule } from '@angular/core';

/** MODULES */
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

/** COMPONENTS */
import { RecoverPasswordPageComponent } from './recover.component';

@NgModule({
  declarations: [
    RecoverPasswordPageComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: RecoverPasswordPageComponent
      }
    ])
  ],
  exports: [
    RecoverPasswordPageComponent
  ]
})
export class RecoverPasswordPageModule {}
