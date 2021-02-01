import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        let a = this.http.post('/api/users/authenticate/' + username, { username: username, password: password }).pipe(catchError(this.handleError));
        // console.log(a);
        let b = 
            a.pipe(map((user : any) => {
                
                // login successful if there's a jwt token in the response
                let usr_string = user['_body'].toString();
                let user_obj = JSON.parse(usr_string);
                if (user && user_obj['token']) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user_obj));
                }
                
                return user_obj;
            }));
        // console.log(a);
        return b;
    }

    private handleError(error: Response) {
        // console.log(error);
        return Observable.throw(error);
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    getToken(): string {
        const currentUser = localStorage.getItem('currentUser');
        var local_data = (currentUser == null || currentUser == undefined) ?  null : JSON.parse(currentUser);
        return (local_data == null || local_data == undefined) ? null : local_data['token'];
    }
}