import { Action } from "@ngrx/store";
import { IComments } from "src/app/models/model-comments";

export enum ECommentsActions {
    GetComments = '[COMMENTS] Get comments',
    GetCommentsSuccess = '[COMMENTS] Get comments Success',
}

export const COMMENTS_KEY = 'comments';

export class GetComments implements Action {
    readonly type = ECommentsActions.GetComments;
}

export class GetCommentsSuccess implements Action {
    readonly type = ECommentsActions.GetCommentsSuccess;

    constructor( public payload: IComments ){}
}

export type CommentsActions = GetComments | GetCommentsSuccess;