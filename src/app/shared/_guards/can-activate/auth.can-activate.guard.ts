import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';

/**SERVICES */
import { AuthService } from './../../services/_auth/auth.service';
 
@Injectable({
  providedIn: 'root'
})
export class AuthCanActivateGuard implements CanActivate{

  constructor(
    private router: Router, 
    private authService: AuthService, 
    private alertCtrl: AlertController) { }
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {

    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      return true;
    }
    
    this.alertCtrl.create({
      header: 'Não Autorizado',
      message: 'Você precisa estar logado para acessar esta página.',
      buttons: ['Entendi']
    }).then(alert => alert.present());

    this.router.navigateByUrl('/');
    return false;
  }
}
