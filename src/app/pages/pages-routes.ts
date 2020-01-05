import { Routes, RouterModule, CanDeactivate } from '@angular/router';
import { pagesRoutesNames } from './pages-routes-names';

import { PagesComponent } from './pages.component';

/**SERVICE */
// import { DataResolverService } from './../shared/services/data/data-resolver.service';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: pagesRoutesNames.HOME.route,
        pathMatch: 'full'
      },
      {
        path: pagesRoutesNames.HOME.route,
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
        // resolve: {
        //   special: DataResolverService
        // }
      }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);