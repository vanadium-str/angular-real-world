import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IFlags } from "src/app/models/model-flags";
import { FLAG_KEY } from "../actions/flags.actions";

export const featureSelector = createFeatureSelector<IFlags>(FLAG_KEY)

export const loginUserSelector = createSelector(
    featureSelector,
    state => state.loginUser
)