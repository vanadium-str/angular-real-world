import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IArticlesState } from "src/app/models/model-article";
import { ARTICLES_KEY } from "../actions/articles.action";

export const featureSelector = createFeatureSelector<IArticlesState>(ARTICLES_KEY);

export const articlesSelector = createSelector(
    featureSelector,
    state => state.articles
)