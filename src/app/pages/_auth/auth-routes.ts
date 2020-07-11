import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { authRoutesNames } from './auth-routes-names';

const authRoutes: Routes = [
  {
    path: authRoutesNames.LOGIN.route,
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
  },
  {
    path: authRoutesNames.SIGNUP.route,
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule),
  },
  {
    path: authRoutesNames.RECOVER_PASSWORD.route,
    loadChildren: () => import('./recover-password/recover.module').then(m => m.RecoverPasswordPageModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: authRoutesNames.LOGIN.route
  },
];

export const AUTH_ROUTES = RouterModule.forChild(authRoutes);