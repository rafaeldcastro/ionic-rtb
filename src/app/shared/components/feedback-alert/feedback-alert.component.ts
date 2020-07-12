import { Component, Input } from '@angular/core';

@Component({
  selector: 'feedback-alert',
  templateUrl: 'feedback-alert.component.html',
  styleUrls: ['feedback-alert.component.scss']
})
export class FeedbackAlertComponent {

  @Input() type;
  @Input() message;
  @Input() round: boolean;

  constructor() {  }
  
}
/**HOW TO USE */
//<feedback-alert [round]="true" [type]="'danger'" [message]="'Hello World! Test message with <strong>strong tags</strong>'"></feedback-alert>
