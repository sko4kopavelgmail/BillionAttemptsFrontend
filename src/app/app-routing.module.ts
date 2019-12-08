import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { GroupManagingComponent } from './group-managing/group-managing.component';
import { ProfileComponent } from './profile/profile.component';
import { TestGenerationComponent } from './test-generation/test-generation.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'group-managing', component: GroupManagingComponent}, 
  {path: 'profile', component: ProfileComponent}, 
  {path: 'test-generation', component: TestGenerationComponent}, 
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }