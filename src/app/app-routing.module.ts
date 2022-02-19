import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {
    path:"profile",
    component: ProfileComponent
  },
  {
    path:"personal-info",
    component: PersonalInfoComponent
  },
  {
    path:"content",
    component: ContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
