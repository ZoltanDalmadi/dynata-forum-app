import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  AdminPageComponent,
  MainPageComponent,
  ProfilePageComponent,
} from 'src/app/pages';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'profile', component: ProfilePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
