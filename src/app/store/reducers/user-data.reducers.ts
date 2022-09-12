import { IUser } from "src/app/models/model-user";
import { EUserActions, GetUserActions } from "../actions/user-data.actions";

export type Action = GetUserActions;

const initialState: IUser = {
    user: {
        email: '',
        token: '',
        username: '',
        bio: '',
        image: ''
    }
}

export const getUserReducer = (state = initialState, action: Action): IUser => {
    switch(action.type){
        case EUserActions.GetUserSuccess: {
            return {
                ...state,
                user: action.payload.user
            }
        }
        default:
            return state;
    }
}