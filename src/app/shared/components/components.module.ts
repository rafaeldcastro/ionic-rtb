import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatSchematicsComponentsModule } from './material-schematics/mat-schema-components.module';


/**COMPONENTS */


@NgModule({
    declarations: [
        
    ],
    imports: [
        CommonModule,
        
        MatSchematicsComponentsModule
    ],
    exports: [
        
        MatSchematicsComponentsModule
    ]
})
export class ComponentsModule { }
