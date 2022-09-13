import { ActionReducerMap } from "@ngrx/store";
import { IArticlesState } from "../models/model-article";
import { IFlags } from "../models/model-flags";
import { IUser } from "../models/model-user";
import { ARTICLES_KEY } from "./actions/articles.action";
import { FLAG_KEY } from "./actions/flags.actions";
import { USER_KEY } from "./actions/user-data.actions";
import { articlesReducer } from "./reducers/articles.reducers";
import { flagsReducer } from "./reducers/flags.reducers";
import { getUserReducer } from "./reducers/user-data.reducers";

export interface State {
    [USER_KEY]: IUser,
    [ARTICLES_KEY]: IArticlesState,
    [FLAG_KEY]: IFlags
}

export const appReducers: ActionReducerMap<State, any> = {
    [USER_KEY]: getUserReducer,
    [ARTICLES_KEY]: articlesReducer,
    [FLAG_KEY]: flagsReducer
}