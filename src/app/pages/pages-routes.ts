import { Routes, RouterModule, CanDeactivate } from '@angular/router';

import { pagesRoutesNames } from '../shared/_routes-names/routes-names.index';

import { PagesComponent } from './pages.component';

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
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);