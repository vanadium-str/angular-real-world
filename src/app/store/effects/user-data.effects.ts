import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs";
import { IUser } from "src/app/models/model-user";
import { UserService } from "src/app/services/user.service";
import { GetUser, GetUserSuccess, EUserActions, RegisterUser } from "../actions/user-data.actions";

@Injectable()
export class GetUserEffects {
    constructor(
        private actions$: Actions,
        private userService: UserService
    ) {}

    loginUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType<GetUser>(EUserActions.GetUser),
            switchMap((action: GetUser) => 
                this.userService.login(action.payload)
                    .pipe(
                        map((res: IUser) => new GetUserSuccess(res))
                    )
            )
        )
    })

    registerUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType<RegisterUser>(EUserActions.RegisterUser),
            switchMap((action: RegisterUser) => 
                this.userService.register(action.payload)
                    .pipe(
                        map((res: IUser) => new GetUserSuccess(res))
                    )
            )
        )
    })
}