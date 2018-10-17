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
import {LockAppGuard} from '../guards/lock-app.guard';
import {LockAuthGuard} from '../guards/lock-auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [LockAppGuard] },
  { path: 'login', component: LoginPageComponent, canActivate: [LockAuthGuard]},
  { path: 'registration', component: RegistrationPageComponent, canActivate: [LockAuthGuard]},
  { path: 'profile', component: UserProfilePageComponent, canActivate: [LockAppGuard] },
  { path: 'details/:id', component: DetailsPageComponent, canActivate: [LockAppGuard] },
  { path: 'details', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];


@NgModule({
  providers: [
    LockAppGuard,
    LockAuthGuard,
    ],
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
