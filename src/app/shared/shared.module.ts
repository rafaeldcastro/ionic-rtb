import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';
import { PipesModule } from './pipes/pipes.module';
import { DirectivesModule } from './directives/directives.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        ComponentsModule,
        PipesModule,
        DirectivesModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ComponentsModule,
        PipesModule,
        DirectivesModule
    ]
})
export class SharedModule { }
