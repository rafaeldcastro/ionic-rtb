import { Injectable } from '@angular/core';

import { EventEmitterService } from '../../../../services/emitter/event-emitter.service';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  present(message?: string) {
    EventEmitterService.get("loading.present").emit(message);
  }

  dismiss() {
    EventEmitterService.get("loading.dismiss").emit();
  }
}