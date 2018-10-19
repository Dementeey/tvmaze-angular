import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyOwnCustomMaterialModule} from './material';
import {
  AsideComponent,
  SearchComponent,
  TableComponent,
  RegistrationFormComponent,
  LoginComponent,
  DetailsComponent,
  UserProfileComponent,
} from './components/';

import {
  DetailsPageComponent,
  HomeComponent,
  LoginPageComponent,
  RegistrationPageComponent,
  UserProfilePageComponent,
  PageNotFoundComponent
} from './pages';
import {AppRoutingModule} from './routing/app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    SearchComponent,
    TableComponent,
    RegistrationFormComponent,
    RegistrationPageComponent,
    LoginPageComponent,
    LoginComponent,
    DetailsComponent,
    DetailsPageComponent,
    HomeComponent,
    UserProfileComponent,
    UserProfilePageComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
