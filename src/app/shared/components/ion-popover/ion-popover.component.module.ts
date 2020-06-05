import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

/** COMPONENTS */
import { IonPopoverComponent } from './ion-popover.component';

@NgModule({
  declarations: [
    IonPopoverComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    IonPopoverComponent
  ],
  entryComponents: [
    IonPopoverComponent
  ]
})
export class IonPopoverComponentModule { }
