import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getAllUsers,
  gotAllUsers,
} from 'src/app/store/actions/profile.actions';

import { map, switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';

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

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
