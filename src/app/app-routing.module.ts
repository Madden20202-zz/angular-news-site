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
  { path: '**', component: PageNotFoundComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
