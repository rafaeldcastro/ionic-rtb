import { Routes, RouterModule, CanDeactivate } from '@angular/router';
import { authenticationRoutesNames } from './authentication-routes-names';

import { AuthenticationComponent } from './authentication.component';

const authenticationPagesRoutes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: '',
        redirectTo: authenticationRoutesNames.LOGIN.route,
        pathMatch: 'full'
      },
      {
        path: authenticationRoutesNames.LOGIN.route,
        loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
      },
      {
        path: authenticationRoutesNames.SIGN_UP.route,
        loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpPageModule),
      },
      {
        path: authenticationRoutesNames.RECOVER.route,
        loadChildren: () => import('./recover/recover.module').then(m => m.RecoverPageModule),
      }
    ]
  }
];

export const AUTH_PAGES_ROUTES = RouterModule.forChild(authenticationPagesRoutes);