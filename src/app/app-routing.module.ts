import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { appRoutesNames } from './shared/_routes-names/routes-names.index';

/**GUARDS */
import { AuthCanActivateGuard } from './shared/_guards/can-activate/auth.can-activate.guard';

const appRoutes: Routes = [
  {
    path: appRoutesNames.SPLASH.route,
    loadChildren: () => import('./_splash/splash.module').then(m => m.SplashPageModule),
  },
  {
    path: appRoutesNames.PAGES.route,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    canActivate: [ AuthCanActivateGuard ],
  },
  {
    path: appRoutesNames.AUTHENTICATION.route,
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: appRoutesNames.SPLASH.route
  },
  {
    path: '**',
    loadChildren: () => import('./pages/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule),
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,
      {
        preloadingStrategy: PreloadAllModules,
        scrollPositionRestoration: 'enabled'
      })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
