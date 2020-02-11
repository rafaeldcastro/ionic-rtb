import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

/**COMPONENTS */
import { AppComponent } from './app.component';
import { LoadingComponent } from './shared/components/loading/loading.component';

/** PLUGINS */
import { IonicStorageModule } from '@ionic/storage';
import { AndroidFullScreen } from '@ionic-native/android-full-screen/ngx';
import { AppRate } from '@ionic-native/app-rate/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule,
    IonicModule.forRoot(), 
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem('access_token');
        },
        // whitelistedDomains: ['localhost:3000'],
        // blacklistedRoutes: ['http://localhost:3000/auth/login']
      }
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AndroidFullScreen,
    AppRate,
    AppVersion,
    InAppBrowser,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
