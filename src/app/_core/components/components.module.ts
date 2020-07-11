import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

/**MODULES */
import { MaterialCoreComponentsModule } from './mat-core-components.module';

/**COMPONENTS */
import { LoadingComponent } from './loading/loading.component';

@NgModule({
    declarations: [
        LoadingComponent
    ],
    imports: [
        CommonModule,
        MaterialCoreComponentsModule,
    ],
    exports: [
        MaterialCoreComponentsModule,
        LoadingComponent
    ]
})
export class CoreComponentsModule { }
