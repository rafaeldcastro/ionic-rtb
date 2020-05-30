import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

/**SERVICES */
import { LoadingNotifications } from '../../_notifications/notification.index';
import { EventEmitterService } from './../../services/emitter/event-emitter.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {

  isLoading: boolean = false;
  message: string;  
  private subscriptions = new Subscription();
  
  constructor() { 
    this.subscriptions.add( EventEmitterService.get(LoadingNotifications.PRESENT).subscribe(msg => this.present(msg)) );
    this.subscriptions.add( EventEmitterService.get(LoadingNotifications.DISMISS).subscribe(() => this.dismiss()) );
  }

  private present(msg?){
    if(msg) this.message = msg;
    this.isLoading = true;
  }

  private dismiss(){
    this.isLoading = false;
    this.message = null;
  }

}
