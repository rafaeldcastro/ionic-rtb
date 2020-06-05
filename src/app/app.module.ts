import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

/**PLUGIN */
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

/**COMPONENTS */
import { LoadingComponent } from './shared/components/loading/loading.component';
import { IonPopoverComponent } from './shared/components/ion-popover/ion-popover.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    IonPopoverComponent
  ],
  entryComponents: [
    IonPopoverComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    IonicModule.forRoot(), 
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
