import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

/** SERVICES */
import { EventEmitterService } from '../emitter/event-emitter.service';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private static token;

  constructor(
    private jwtHelper: JwtHelperService,
    private http: HttpClient,
    private router: Router,
  ) {
    this.loadStorage();
  }

  static getToken(): string {
    return this.token;
  }

  private loadStorage() {

    if (localStorage.getItem('acess-token')) {
      AuthService.token = localStorage.getItem('acess-token');
    } else {
      AuthService.token = '';
      EventEmitterService.get("user.clear-storage").emit();
    }
  }

  private getHeaders(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + AuthService.token
      })
    }
    return httpOptions;
  }

  isAuthenticated() {
    return true;
    // return !this.jwtHelper.isTokenExpired(AuthService.token);
  }

  signOut() {

    EventEmitterService.get("user.clear-storage").emit();
    AuthService.token = '';
    localStorage.removeItem('acess-token');
    this.router.navigate(['/login']);
  }

  setAuthOnStorage(token, user) {

    localStorage.setItem('token', token);
    AuthService.token = token;
    EventEmitterService.get("user.set").emit(user);
  }

  signIn(user) {

    const url = `${environment.URL_API}/usuario/login`;

    return this.http.post(url, user).pipe(
      map((data: any) => {
        this.setAuthOnStorage(data.token, data.user);
        return true;
      })
    );
  }

  recoverPassword(email: string) {

    const url = `${environment.URL_API}/recover_password`;

    return this.http.post(url, email).pipe(
      map(() => {
        return true;
      })
    );
  }

  signUp(user): Observable<any> {

    const url = `${environment.URL_API}/usuario/cadastrar`;

    let body = JSON.stringify({
      'usuario': user
    })

    return this.http.post(url, body, this.getHeaders()).pipe(
      map((resp: any) => {
        return resp.user;
      })
    );
  }

}
