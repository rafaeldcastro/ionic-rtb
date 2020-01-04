import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, UrlSerializer } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {
        preloadingStrategy: PreloadAllModules,  
        scrollPositionRestoration: 'enabled',
        urlUpdateStrategy: 'eager',
        malformedUriErrorHandler:
          (error: URIError, urlSerializer: UrlSerializer, url: string) => {
            console.error(url);
            return urlSerializer.parse('/home');
          }
      })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
