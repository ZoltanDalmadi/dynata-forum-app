import { createSelector } from '@ngrx/store';
import { AppState } from '@app/types';

export const selectProfile = (state: AppState) => state.profile;

export const allUsers = createSelector(selectProfile, state => state.users);
export const allRoles = createSelector(selectProfile, state => state.roles);

export const currentUser = createSelector(
  selectProfile,
  state => state.currentUser
);
