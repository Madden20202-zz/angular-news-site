import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginScreenComponent } from '../login-screen/login-screen.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { SignupScreenComponent } from '../signup-screen/signup-screen.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  appRoutes: Routes = [
    { path: 'login', component: LoginScreenComponent },
    { path: 'sign-up', component: SignupScreenComponent},
    { path: 'home', component: AppComponent},
    { path: '**', component: PageNotFoundComponent }
  ];


  constructor(){ }

  ngOnInit(): void { }
}