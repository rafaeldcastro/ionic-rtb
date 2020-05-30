import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { User } from '../../models/user/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {

    private readonly URL_API = `${environment.URL_API}/users`;

    private currentUserSubject: BehaviorSubject<User>;
    currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    /**
     * Sign-In the user, store user details and jwt token in local storage to 
     * keep user logged in between page refreshes
     * */
    login(username: string, password: string) {

        // return this.http.post<any>(`${this.URL_API}/authenticate`, { username, password })
        return this.http.post<any>(`${this.URL_API}/login`, { username, password })
            .pipe(map(user => {
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    recoverPassword(email: string) {

        return this.http.post<any>(`${this.URL_API}/recover_password`, { email })
            .pipe(map(data => data));
    }

    signUp(user){

        let body = JSON.stringify({ 'user': user })

        return this.http.post<any>(`${this.URL_API}/signup`, body)
            .pipe(map(data => data));
    }
}