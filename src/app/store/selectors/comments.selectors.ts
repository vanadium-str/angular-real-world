import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICommentsState } from "src/app/models/model-comments";
import { COMMENTS_KEY } from "../actions/comments.actions";

export const featureSelector = createFeatureSelector<ICommentsState>(COMMENTS_KEY);

export const commentsSelector = createSelector(
    featureSelector,
    state => state.comments
)