import { createAction, props } from '@ngrx/store';
import { RoleObject, User } from '../../types';

export const getAllUsers = createAction('[PROFILE] GET_ALL_USERS');
export const gotAllUsers = createAction(
  '[PROFILE] GOT_ALL_USERS',
  props<{ users: User[] }>()
);

export const selectUser = createAction(
  '[PROFILE] SELECT_USER',
  props<{ userId: number }>()
);

export const getAllRoles = createAction('[PROFILE] GET_ALL_ROLES');
export const gotAllRoles = createAction(
  '[PROFILE] GOT_ALL_ROLES',
  props<{ roles: RoleObject[] }>()
);
