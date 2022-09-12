import { Action } from "@ngrx/store";
import { IUser, IUserRequest } from "src/app/models/model-user";

export enum EUserActions {
    GetUser = '[USER] Get user',
    RegisterUser = '[USER] Register user',
    GetUserSuccess = '[USER] Get user success'
}

export const USER_KEY = 'user';

export class GetUser implements Action {
    readonly type = EUserActions.GetUser;

    constructor( public payload: IUserRequest ){}
}

export class RegisterUser implements Action {
    readonly type = EUserActions.RegisterUser;

    constructor( public payload: IUserRequest ){}
}

export class GetUserSuccess implements Action {
    readonly type = EUserActions.GetUserSuccess;

    constructor( public payload: IUser ){}
}

export type GetUserActions = GetUser | GetUserSuccess | RegisterUser;