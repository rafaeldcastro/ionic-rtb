import {Directive, Input, Output, EventEmitter, AfterViewInit} from '@angular/core';

@Directive({
    selector: '[interaction]'
})
export class InteractionDirective implements AfterViewInit {

    /**
     * EXEMPLO DE USO:
     * 
     * <div *ngFor="let item of itens; let last = last;"
            interaction
            [last]="last"
            (onLast)="your_Method_To_Execute_After_Last_Interaction()">
     */

    @Input() first: boolean;
    @Input() last: boolean;

    @Output() onFirst: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() onLast: EventEmitter<boolean> = new EventEmitter<boolean>();

    ngAfterViewInit() {
        this.check();
    }

    check() {
        if(this.last) {
            this.onLast.emit(true);
        }else if(this.first) {
            this.onFirst.emit(true);
        }
    }
}