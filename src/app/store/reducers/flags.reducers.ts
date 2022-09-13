import { IFlags } from "src/app/models/model-flags";
import { EFlagsActions, FlagsActions } from "../actions/flags.actions";

export type Action = FlagsActions;

const initialState = {
    loginUser: false
}

export const flagsReducer = (state = initialState, action: Action): IFlags => {
    switch(action.type) {
        case EFlagsActions.LoginUser: {
            return {
                ...state,
                loginUser: !state.loginUser
            }
        }
        default:
            return state;
    }
}