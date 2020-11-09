import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getAllRoles,
  getAllTopics,
  getAllUsers,
  gotAllRoles,
  gotAllTopics,
  gotAllUsers,
  updateUser,
  updateUserFailure,
  updateUserSuccess,
} from '@store/actions';

import { catchError, map, switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { of } from 'rxjs';

@Injectable()
export class ProfileEffects {
  getAllUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllUsers),
      switchMap(() =>
        this.apiService.allUsers().pipe(map(users => gotAllUsers({ users })))
      )
    )
  );

  getAllRoles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllRoles),
      switchMap(() =>
        this.apiService.allRoles().pipe(map(roles => gotAllRoles({ roles })))
      )
    )
  );

  getAllTopics$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAllTopics),
      switchMap(() =>
        this.apiService
          .allTopics()
          .pipe(map(topics => gotAllTopics({ topics })))
      )
    )
  );

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateUser),
      switchMap(userData =>
        this.apiService.updateUser(userData).pipe(
          map(updateUserSuccess),
          catchError(error => of(updateUserFailure({ error: error.message })))
        )
      )
    )
  );

  updateUserSuccess$ = createEffect(() =>
    this.actions$.pipe(ofType(updateUser), map(getAllUsers))
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
