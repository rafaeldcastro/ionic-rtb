import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

/** COMPONENTS */
import { IonFabComponentModule } from './ion-fab/ion-fab.component.module';

@NgModule({
  declarations: [
    
  ],
  imports: [
    IonicModule,
    RouterModule,
    FormsModule,
    CommonModule,
    IonFabComponentModule
  ],
  exports: [
    IonFabComponentModule
  ],
  entryComponents: [
    
  ]
})
export class ComponentsModule { }
