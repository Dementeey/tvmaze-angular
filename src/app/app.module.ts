import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyOwnCustomMaterialModule} from './material';
import {
  AsideComponent,
  ButtonComponent,
  SearchComponent,
  TableComponent,
  RegistrationFormComponent,
  LoginComponent,
  TableRowComponent,
  DetailsComponent,
  UserProfileComponent
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



@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    ButtonComponent,
    SearchComponent,
    TableComponent,
    TableRowComponent,
    RegistrationFormComponent,
    RegistrationPageComponent,
    LoginPageComponent,
    LoginComponent,
    DetailsComponent,
    DetailsPageComponent,
    HomeComponent,
    UserProfileComponent,
    UserProfilePageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
