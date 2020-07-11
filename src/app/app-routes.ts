import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

/**GUARDS */
import { AuthCanActivateGuard } from './shared/services/_guards/can-activate/auth.can-activate.guard';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainPagesModule),
    canActivate: [ AuthCanActivateGuard ]
  },  
  {
    path: '',
    loadChildren: () => import('./pages/_auth/auth.module').then(m => m.AuthPagesModule),
  },
  {
    path: '**',
    loadChildren: () => import('./pages/_page-not-found/page-not-fount.module').then(m => m.PageNotFoundModule),
  }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { 
  preloadingStrategy: PreloadAllModules,
  scrollPositionRestoration: 'enabled' 
});