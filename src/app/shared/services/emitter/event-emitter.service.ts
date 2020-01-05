import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EventEmitterService {

    private static emitters: {
        [nomeEvento: string]: EventEmitter<any>
    } = {}

    static get(nomeEvento: string): EventEmitter<any> {
        if (!this.emitters[nomeEvento])
            this.emitters[nomeEvento] = new EventEmitter<any>();
        return this.emitters[nomeEvento];
    }

}

/**
 * to emit:
 * 
  EventEmitterService.get("render.output").emit(payload);

 */

 /**
  * to SUBSCRIBE:
   
   private subscriptions = new Subscription();
   
   constructor(){
     this.subscriptions.add( EventEmitterService.get("render.output").subscribe(payload => this.getActionNotification(payload)) )
    }

    
  */

  /**
   * to UNSUBCSCRIBE
    
    
  ngOnDestroy(){
    this.subscriptions.unsubscribe();
  }

   * 
   */