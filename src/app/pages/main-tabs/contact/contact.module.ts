import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

/** MODULES */
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

/** COMPONENTS */
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [
    ContactComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContactComponent
      }
    ])
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactModule {}
