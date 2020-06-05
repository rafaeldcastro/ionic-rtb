import { PopoverController } from '@ionic/angular';
import { Component, Input } from '@angular/core';

/**MODELS */
import { IonPopoverOptions } from './shared/models/ion-popover-options.model';

/**SERVICES */
import { EventEmitterService } from './../../services/emitter/event-emitter.service';

@Component({
  selector: 'ion-popover-component',
  templateUrl: './ion-popover.component.html',
  styleUrls: ['./ion-popover.component.scss'],
})
export class IonPopoverComponent {

  @Input() ionPopoverOptions: IonPopoverOptions = new IonPopoverOptions();
  
  constructor(private popoverController: PopoverController) {}

  emitNotification(buttonIndex){
    EventEmitterService.get(this.ionPopoverOptions.buttons[buttonIndex].notification).emit();
    this.dismiss();
  }

  private dismiss(){
    this.popoverController.dismiss();
  }
}
