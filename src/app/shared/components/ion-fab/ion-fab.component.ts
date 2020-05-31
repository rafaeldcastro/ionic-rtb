import { Component, Input } from '@angular/core';

/**MODELS */
import { IonFabOptions } from './shared/models/ion-fab-options.model';

@Component({
  selector: 'ion-fab-component',
  templateUrl: './ion-fab.component.html',
  styleUrls: ['./ion-fab.component.scss'],
})
export class IonFabComponent {

  @Input() ionFabOptions: IonFabOptions = new IonFabOptions();
  
  constructor() {}
}
