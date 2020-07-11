import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

/**SERVICES */
import { LoadingNotifications } from './notifications/loading.notifications';
import { EventEmitterService } from '@shared/services/emitter/event-emitter.service';

@Component({
  selector: 'app-loading',
  styles: [`
    .app-loading{
      align-items: center;
      background: rgba(0,0,0,.4);
      height: 100%;
      justify-content: center;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 10000;

    }
    svg{
      background: none;
      display: block;
      margin: auto; 
      shape-rendering: auto;
      position: absolute;
    }
    svg:first-child{
      margin-left: 3px;
      margin-top: 1px;
      opacity: .6;
    }
  `],
  template: `
    <div *ngIf="isLoading" class="d-flex app-loading animate__animated animate__fadeIn">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="50" cy="50" fill="none" stroke="var(--ion-color-light)" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138" transform="rotate(6.12324 50 50)">
          <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
        </circle>
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="50" cy="50" fill="none" stroke="var(--ion-color-primary-shade)" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138" transform="rotate(6.12324 50 50)">
          <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
        </circle>
      </svg>
    </div>
  `})
export class LoadingComponent {

  isLoading: boolean;
  private subscriptions = new Subscription();

  constructor() {
    this.subscriptions.add(EventEmitterService.get(LoadingNotifications.PRESENT).subscribe(payload => this.present(payload)));
    this.subscriptions.add(EventEmitterService.get(LoadingNotifications.DISMISS).subscribe(timer => this.dismiss(timer)));
  }

  private present(payload?) {
    this.isLoading = true;
  }

  private dismiss(timer) {

    if (timer) {
      setTimeout(() => {
        this.isLoading = false;
      }, timer);
      return;
    }
    this.isLoading = false;
  }

}
