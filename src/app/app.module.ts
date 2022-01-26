import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-buttons/login-page.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { SignupScreenComponent } from './signup-screen/signup-screen.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeScreenComponent } from './main-page/home-screen/home-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginScreenComponent,
    SignupScreenComponent,
    PageNotFoundComponent,
    HomeScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
