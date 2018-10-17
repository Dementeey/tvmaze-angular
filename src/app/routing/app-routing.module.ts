import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  DetailsPageComponent,
  HomeComponent,
  LoginPageComponent,
  PageNotFoundComponent,
  RegistrationPageComponent,
  UserProfilePageComponent
} from '../pages';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginPageComponent },
  { path: 'registration', component: RegistrationPageComponent },
  { path: 'profile', component: UserProfilePageComponent },
  { path: 'details/:id', component: DetailsPageComponent },
  { path: 'details', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
