import { Action } from "@ngrx/store";

export enum EFlagsActions {
    LoginUser = '[FLAG] User successfully login',
}

export const FLAG_KEY = 'flag';

export class LoginUser implements Action {
    readonly type = EFlagsActions.LoginUser;
}

export type FlagsActions = LoginUser;