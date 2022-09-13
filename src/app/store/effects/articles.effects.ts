import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { map, switchMap } from "rxjs"
import { IArticles } from "src/app/models/model-article"
import { ArticlesService } from "src/app/services/articles.service"
import { EArticlesActions, GetAllArticles, GetAllArticlesSuccess, GetFeedArticles, GetFeedArticlesSuccess } from "../actions/articles.action"

@Injectable()
export class ArticlesEffects {
    constructor(
        private actions$: Actions,
        private articlesService: ArticlesService
    ) {}

    allArticles$ = createEffect(() => {
        return this.actions$.pipe(
            ofType<GetAllArticles>(EArticlesActions.GetAllArticles),
            switchMap((action: GetAllArticles) =>
                this.articlesService.getAll()
                    .pipe(
                        map((res: IArticles) => new GetAllArticlesSuccess(res))
                    )
            )
        )
    })

    feedArticles$ = createEffect(() => {
        return this.actions$.pipe(
            ofType<GetFeedArticles>(EArticlesActions.GetFeedArticles),
            switchMap((action: GetFeedArticles) =>
                this.articlesService.getFeed()
                    .pipe(
                        map((res: IArticles) => new GetFeedArticlesSuccess(res))
                    )
            )
        )
    })
}