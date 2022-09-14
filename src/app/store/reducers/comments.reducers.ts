import { IComments, ICommentsState } from "src/app/models/model-comments";
import { CommentsActions, ECommentsActions } from "../actions/comments.actions";

export type Action = CommentsActions;

const initialState: ICommentsState = {
    comments: {
        comments: []
    }
}

export const commentsReducer = (state = initialState, action: Action): ICommentsState => {
    switch(action.type) {
        case ECommentsActions.GetCommentsSuccess: {
            return {
                ...state,
                comments: action.payload
            }
        }
        default:
            return state;
    }
}