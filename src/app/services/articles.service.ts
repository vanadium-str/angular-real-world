import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { catchError, Observable, throwError } from "rxjs";
import { IArticles } from "../models/model-article";
import { getUserSelector } from "../store/selectors/user-data.selectors";
import { url } from "../utils/constants";

@Injectable({
    providedIn: 'root'
})

export class ArticlesService {
    constructor(
        private http: HttpClient,
        private store: Store
    ) {}

    user$ = this.store.select(getUserSelector);
    token: string;

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
          console.error('An error occurred:', error.error);
        } else {
          console.error(
            `Backend returned code ${error.status}, body was: `, error.error);
        }

        return throwError(() => new Error('Something bad happened; please try again later.'));
    }

    getAll(): Observable<IArticles> {

        this.user$.subscribe(value => this.token = value.token);

        return this.http.get<IArticles>(`${url}/articles`, {
            headers: new HttpHeaders({
              'Authorization': `Token ${this.token}`
            })
        })
            .pipe(
                catchError(err => this.handleError(err))
            )
    }

    getFeed(): Observable<IArticles> {

        this.user$.subscribe(value => this.token = value.token);

        return this.http.get<IArticles>(`${url}/articles/feed`, {
            headers: new HttpHeaders({
              'Authorization': `Token ${this.token}`
            })
        })
            .pipe(
                catchError(err => this.handleError(err))
            )
    }
}