import { Action } from "@ngrx/store";
import { IArticles } from "src/app/models/model-article";

export enum EArticlesActions {
    GetAllArticles = '[ARTICLES] Get all articles',
    GetAllArticlesSuccess = '[ARTICLES] Get all articles success',
    GetFeedArticles = '[ARTICLES] Get articles from people who you follow',
    GetFeedArticlesSuccess = '[ARTICLES] Get articles from people who you follow success',
}

export const ARTICLES_KEY = 'articles';

export class GetAllArticles implements Action {
    readonly type = EArticlesActions.GetAllArticles;
}

export class GetAllArticlesSuccess implements Action {
    readonly type = EArticlesActions.GetAllArticlesSuccess;

    constructor( public payload: IArticles ){}
}

export class GetFeedArticles implements Action {
    readonly type = EArticlesActions.GetFeedArticles;
}

export class GetFeedArticlesSuccess implements Action {
    readonly type = EArticlesActions.GetFeedArticlesSuccess;

    constructor( public payload: IArticles ){}
}

export type ArticlesActions = GetAllArticles | GetAllArticlesSuccess | GetFeedArticles | GetFeedArticlesSuccess;