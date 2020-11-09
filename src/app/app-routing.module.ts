import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent, ProfilePageComponent } from 'src/app/pages';

const routes: Routes = [
  { path: '', component: ProfilePageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'profile', component: ProfilePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
