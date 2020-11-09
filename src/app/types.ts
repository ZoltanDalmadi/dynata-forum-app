export const enum Role {
  Administrator = 0,
  Guest = 1,
  SilverUser = 2,
  GoldUser = 3,
}

export interface User {
  id: number;
  name: string;
  password: string;
  email: string;
  role: Role;
}

export interface UserResponse {
  status: number;
  message: string;
  data: User[];
}

export interface ProfileState {
  users: User[];
  currentUser: User;
}

export interface MainState {}

export interface AdminState {}

export interface AppState {
  main: MainState;
  profile: ProfileState;
  admin: AdminState;
}
