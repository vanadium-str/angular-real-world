import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IUser } from "src/app/models/model-user";
import { USER_KEY } from "../actions/user-data.actions";

export const featureSelector = createFeatureSelector<IUser>(USER_KEY);

export const getUserSelector = createSelector(
    featureSelector,
    state => state.user
)