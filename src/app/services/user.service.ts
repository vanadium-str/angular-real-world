import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from "rxjs";
import { IUser, IUserRequest } from "../models/model-user";
import { url } from "../utils/constants";

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      //Authorization: 'my-auth-token'
    })
};

@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(private http: HttpClient) {}

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
          console.error('An error occurred:', error.error);
        } else {
          console.error(
            `Backend returned code ${error.status}, body was: `, error.error);
        }

        return throwError(() => new Error('Something bad happened; please try again later.'));
    }

    login(request: IUserRequest): Observable<IUser> {
        return this.http.post<IUser>(`${url}/users/login`, request, httpOptions).pipe(
            catchError(err => this.handleError(err))
        )
    }

    register(request: IUserRequest): Observable<IUser> {
        return this.http.post<IUser>(`${url}/users`, request, httpOptions).pipe(
            catchError(err => this.handleError(err))
        )
    }
}