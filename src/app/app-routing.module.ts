import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { appRoutesNames } from './app-routes-names';

const appRoutes: Routes = [
  {
    path: appRoutesNames.SPLASH.route,
    loadChildren: () => import('./pages/splash/splash.module').then(m => m.SplashPageModule),
  },
  {
    path: appRoutesNames.PAGES.route,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
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
        scrollPositionRestoration: 'enabled',
        urlUpdateStrategy: 'eager'
      })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
