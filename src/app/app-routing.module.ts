import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginScreenComponent } from './login-screen/login-screen.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupScreenComponent } from './signup-screen/signup-screen.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'login', component: LoginScreenComponent },
  { path: 'sign-up', component: SignupScreenComponent},
  { path: 'home', component: AppComponent},
  // the redirect has to be in front of the wild card
  // in order to function properly, otherwise it will 
  // use the wild card, making the redirect useless
  // create a main splash page, lable that home, and 
  // label the old home to companyTitle, since it is the 
  // name and slogan
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } //used for debugging
      )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
