import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { catchError, Observable, throwError } from "rxjs";
import { IArticle } from "../models/model-article";
import { IComments } from "../models/model-comments";
import { articlesSelector } from "../store/selectors/articles.selectors";
import { url } from "../utils/constants";
import { VariablesService } from "./variables.service";

@Injectable({
    providedIn: 'root'
})

export class CommentsService {
    constructor(
        private http: HttpClient,
        private store: Store,
        private variablesService: VariablesService
    ) {}

    articles$ = this.store.select(articlesSelector);
    article: IArticle;
    index: number;

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
          console.error('An error occurred:', error.error);
        } else {
          console.error(
            `Backend returned code ${error.status}, body was: `, error.error);
        }
        return throwError(() => new Error('Something bad happened; please try again later.'));
    }

    getComments(): Observable<IComments> {
        this.index = this.variablesService.getIndex();
        this.articles$.subscribe((data) => {
            this.article = data.articles[this.index];    
          })

        return this.http.get<IComments>(`${url}/articles/${this.article.slug}/comments`)
            .pipe(
                catchError(err => this.handleError(err))
            )
    }
}