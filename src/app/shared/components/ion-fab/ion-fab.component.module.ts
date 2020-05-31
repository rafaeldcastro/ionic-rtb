import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

/** COMPONENTS */
import { IonFabComponent } from './ion-fab.component';
import { IonFabButtonComponent } from './shared/components/ion-fab-button/ion-fab-button.component';

@NgModule({
  declarations: [
    IonFabComponent,
    IonFabButtonComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    IonFabComponent,
    IonFabButtonComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class IonFabComponentModule { }
