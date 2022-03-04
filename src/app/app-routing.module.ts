import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginScreenComponent } from './login-screen/login-screen.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupScreenComponent } from './signup-screen/signup-screen.component';
import { HomeScreenComponent } from './main-page/home-screen/home-screen.component';

// Firebase Imports
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const routes: Routes = [

  // in the path: option the whole path has to be 
  // added in, otherwise the 404 error shows

  // the redirect has to be in front of the wild card
  // in order to function properly, otherwise it will 
  // use the wild card, making the redirect useless
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home/login', component: LoginScreenComponent },
  { path: 'home/sign-up', component: SignupScreenComponent },
  { path: 'home', component: HomeScreenComponent },
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
