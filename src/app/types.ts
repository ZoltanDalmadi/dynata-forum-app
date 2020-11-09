export const enum Role {
  Administrator = 0,
  Guest = 1,
  SilverUser = 2,
  GoldUser = 3,
}

export const enum Rights {
  ReadComment = 1,
  AddDeleteComment = 2,
  AddDeleteTopic = 4,
  AddDeleteOthersTopics = 8,
}

export interface User {
  id: number;
  name: string;
  password: string;
  email: string;
  role: Role;
}

export interface BaseResponse {
  status: number;
  message: string;
}

export interface UserResponse extends BaseResponse {
  data: User[];
}

export interface Comment {
  id: number;
  body: string;
  author: User;
  comments: Comment[];
}

export interface Topic {
  id: number;
  author: User;
  title: string;
  body: string;
  comments: Comment[];
}

export interface ProfileState {
  users: User[];
  currentUser: User;
  roles: RoleObject[];
  topics: Topic[];
}

export interface RoleObject {
  id: number;
  name: string;
  rights: number;
}

export interface RoleResponse extends BaseResponse {
  data: RoleObject[];
}

export interface TopicsResponse extends BaseResponse {
  data: Topic[];
}

export interface MainState {}

export interface AdminState {}

export interface AppState {
  main: MainState;
  profile: ProfileState;
  admin: AdminState;
}
