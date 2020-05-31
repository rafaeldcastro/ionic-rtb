import { Component, Input, AfterViewInit } from '@angular/core';

/**MODELS */
import { IonFabButtonOptions } from '../../models/ion-fab-button-options.model';

/**SERVICES */
import { EventEmitterService } from './../../../../../services/emitter/event-emitter.service';

@Component({
  selector: 'ion-fab-button-component',
  templateUrl: './ion-fab-button.component.html',
  styleUrls: ['./ion-fab-button.component.scss'],
})
export class IonFabButtonComponent implements AfterViewInit{

  @Input() options: IonFabButtonOptions;
  fabButtonId: number = Math.random();
  
  constructor() {     
  }

  ngAfterViewInit(){
    if(this.options.label){
      this.setLabel(this.options.label);
    }
  }

  setLabel(label){
    let el: any = document.getElementById(`fabButton${this.fabButtonId}`);
    el.setAttribute('data-desc',label);
  }

  emitNotification(){
    EventEmitterService.get(this.options.notification).emit();
  }

}
