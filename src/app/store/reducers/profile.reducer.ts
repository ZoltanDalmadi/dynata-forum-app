import { createReducer, on } from '@ngrx/store';
import { gotAllUsers, selectUser } from 'src/app/store/actions/profile.actions';
import { ProfileState } from 'src/app/types';

export const initialState: ProfileState = {
  users: [],
  currentUser: null,
};

export const reducer = createReducer<ProfileState>(
  initialState,
  on(gotAllUsers, (state, { users }) => ({
    ...state,
    users,
    currentUser: users[0],
  })),
  on(selectUser, (state, { userId }) => ({
    ...state,
    currentUser: state.users.find(user => user.id === userId),
  }))
);
