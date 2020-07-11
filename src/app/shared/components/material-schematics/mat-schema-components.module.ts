import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import * as matSchematics from './index';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
    declarations: [
        matSchematics.components
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        matSchematics.modules,
        MatDatepickerModule,
    ],
    exports: [
        matSchematics.components,
        matSchematics.modules,
        MatDatepickerModule
    ],
    providers: [
        MatDatepickerModule
    ]
})
export class MatSchematicsComponentsModule { }
