import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LoginScreenComponent } from '../login-screen/login-screen.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { SignupScreenComponent } from '../signup-screen/signup-screen.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginRoutes: Routes = [
    { path: 'login', component: LoginScreenComponent },
    { path: 'sign-up', component: SignupScreenComponent},
    { path: '**', component: PageNotFoundComponent }
  ]

  constructor(){ }

  ngOnInit(): void {
  }
}