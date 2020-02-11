import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

/**SERVICES */
import { AuthService } from './../../services/_auth/auth.service';

 
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(
    private router: Router, 
    private auth: AuthService, 
    private alertCtrl: AlertController) { }
 
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.auth.user.pipe(
      take(1),
      map(user => {
        if (!user) {
          this.alertCtrl.create({
            header: 'Não Autorizado',
            message: 'Você precisa estar logado para acessar esta página.',
            buttons: ['Entendi']
          }).then(alert => alert.present());
 
          this.router.navigateByUrl('/');
          return false;
        } else {
          return true;
        }
      })
    )
  }
}