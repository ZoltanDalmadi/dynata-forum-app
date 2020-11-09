interface MainState {}

interface ProfileState {}

interface AdminState {}

interface AppState {
  main: MainState;
  profile: ProfileState;
  admin: AdminState;
}
