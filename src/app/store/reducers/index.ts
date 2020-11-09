import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '@app/types';

import * as admin from './admin.reducer';
import * as main from './main.reducer';
import * as profile from './profile.reducer';

export const reducerMap: ActionReducerMap<AppState> = {
  main: main.reducer,
  admin: admin.reducer,
  profile: profile.reducer,
};
