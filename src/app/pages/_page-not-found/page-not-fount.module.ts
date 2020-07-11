import { NgModule } from '@angular/core';

/** MODULES */
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

/** COMPONENTS */
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: PageNotFoundComponent
      }
    ])
  ],
  exports: [
    PageNotFoundComponent
  ]
})
export class PageNotFoundModule {}
