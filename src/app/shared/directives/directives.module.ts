import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
    BackButtonDirective, 
    InteractionDirective 
} from './index';

@NgModule({
    declarations: [
        BackButtonDirective,
        InteractionDirective
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        BackButtonDirective,
        InteractionDirective
    ]
})
export class DirectivesModule { }
