import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { map, switchMap } from "rxjs"
import { IComments } from "src/app/models/model-comments"
import { CommentsService } from "src/app/services/comments.service"
import { ECommentsActions, GetComments, GetCommentsSuccess } from "../actions/comments.actions"

@Injectable()
export class CommentsEffects {
    constructor(
        private actions$: Actions,
        private commentsService: CommentsService
    ) {}

    comments$ = createEffect(() => {
        return this.actions$.pipe(
            ofType<GetComments>(ECommentsActions.GetComments),
            switchMap((action: GetComments) =>
                this.commentsService.getComments()
                    .pipe(
                        map((res: IComments) => new GetCommentsSuccess(res))
                    )
            )
        )
    })
}