import { Routes, RouterModule } from '@angular/router';
import { MainTabsComponent } from './main-tabs.component';

import { mainTabsRoutesNames } from './main-tabs-routes-names';

const mainTabsRoutes: Routes = [
  {
    path: '',
    component: MainTabsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: mainTabsRoutesNames.DASHBOARD.route
      },
      {
        path: mainTabsRoutesNames.DASHBOARD.route,
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: mainTabsRoutesNames.CONTACT.route,
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      }
    ]
  }
];

export const MAIN_TABS_ROUTES = RouterModule.forChild(mainTabsRoutes);