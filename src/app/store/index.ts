import { ActionReducerMap } from "@ngrx/store";
import { IUser } from "../models/model-user";
import { USER_KEY } from "./actions/user-data.actions";
import { getUserReducer } from "./reducers/user-data.reducers";

export interface State {
    [USER_KEY]: IUser
}

export const appReducers: ActionReducerMap<State, any> = {
    [USER_KEY]: getUserReducer
}