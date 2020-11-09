import { createAction, props } from '@ngrx/store';
import { User } from '../../types';

export const getAllUsers = createAction('[PROFILE] GET_ALL_USERS');
export const gotAllUsers = createAction(
  '[PROFILE] GOT_ALL_USERS',
  props<{ users: User[] }>()
);

export const selectUser = createAction(
  '[PROFILE] SELECT_USER',
  props<{ userId: number }>()
);
