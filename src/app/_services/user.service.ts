import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../_models';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UserService {

    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    private dataUrl = 'HttpClient://localhost:3000';

    constructor(private HttpClient: HttpClient) { }

    // getAll(HttpClientOptions: string) {
    //     return this.HttpClient.get('/api/users', HttpClientOptions);
    // }


    getById(id: number) {
        return this.HttpClient.get('/api/users' + id);
    }

    getByToken(header: HttpHeaders) {
        var dataUrl = this.dataUrl + '/api/users';
        // console.log(dataUrl);
        console.log(header);
        return this.HttpClient.get(dataUrl, {headers: header}).pipe(
            catchError(this.handleError)
        );
    }

    register(user: User) {
        return this.HttpClient.post('/api/users/register', user);
    }

    update(user: User) {
        return this.HttpClient.put(`/users/` + user.id, user);
    }

    delete(id: number) {
        return this.HttpClient.delete(`/users/` + id);
    }

    private handleError(error: Response) {
        return Observable.throw(error);
      }
}