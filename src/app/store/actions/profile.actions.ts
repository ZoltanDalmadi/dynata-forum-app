import { createAction, props } from '@ngrx/store';
import { RoleObject, Topic, User } from '../../types';

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

export const getAllTopics = createAction('[PROFILE] GET_ALL_TOPICS');
export const gotAllTopics = createAction(
  '[PROFILE] GOT_ALL_TOPICS',
  props<{ topics: Topic[] }>()
);

export const updateUser = createAction(
  '[PROFILE] UPDATE_USER',
  props<{ id: number; name: string; email: string }>()
);

export const updateUserSuccess = createAction('[PROFILE] UPDATE_USER_SUCCESS');
export const updateUserFailure = createAction(
  '[PROFILE] UPDATE_USER_FAILURE',
  props<{ error: string }>()
);
