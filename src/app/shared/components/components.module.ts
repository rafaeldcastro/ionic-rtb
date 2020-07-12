import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatSchematicsComponentsModule } from './material-schematics/mat-schema-components.module';
import { IonFabComponentModule } from './ion-fab/ion-fab.component.module';

/**COMPONENTS */
import { MainHeaderComponent } from './main-header/main-header.component';
import { DropdownMenuComponent } from './dropdown/dropdown-menu.component';

@NgModule({
    declarations: [
        MainHeaderComponent,
        DropdownMenuComponent
    ],
    imports: [
        CommonModule,
        IonFabComponentModule,
        MatSchematicsComponentsModule
    ],
    exports: [
        IonFabComponentModule,
        MatSchematicsComponentsModule,
        MainHeaderComponent,
        DropdownMenuComponent
    ]
})
export class ComponentsModule { }
