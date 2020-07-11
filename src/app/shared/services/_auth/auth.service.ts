import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { APP_CONSTANTS } from '@constants/app';
import { environment } from '@env';

/**MODELS */
import { User } from '@models/user/user.model';

/**SERVICES */
import { LocalStorageService } from '@shared/services/local-storage/local-storage.service';

@Injectable({ providedIn: 'root' })
export class AuthService {

    private readonly URL_API = `${environment.URL_API}/users`;

    private currentUserSubject: BehaviorSubject<User>;
    currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem(`${APP_CONSTANTS.APP_PREFIX}CURRENT-USER`)));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    set currentUserValue(user) {
        LocalStorageService.setItem('CURRENT-USER', user)
        this.currentUserSubject.next(user);
    }

    /**
     * Sign-In the user, store user details and jwt token in local storage to 
     * keep user logged in between page refreshes
     * */
    login(username: string, password: string) {

        // return this.http.post<any>(`${this.URL_API}/authenticate`, { username, password })
        return this.http.post<any>('https://reqres.in/api/login', { username, password })
            .pipe(map(user => {
                return user;
            })).toPromise();
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem(`${APP_CONSTANTS.APP_PREFIX}CURRENT-USER`);
        this.currentUserSubject.next(null);
    }

    recoverPassword(email: string) {

        return this.http.post<any>(`${this.URL_API}/recover_password`, { email })
            .pipe(map(data => data)).toPromise();
    }

    signUp(user){
        // let body = JSON.stringify(user)
        
        return this.http.post<any>('https://reqres.in/api/register', user)
        // return this.http.post<any>(`${this.URL_API}/signup`, body)
            .pipe(map(data => data)).toPromise();
    }
}