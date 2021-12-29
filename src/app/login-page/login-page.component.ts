import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LoginScreenComponent } from '../login-screen/login-screen.component';
import { SignupScreenComponent } from '../signup-screen/signup-screen.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginRoutes: Routes = [
    { path: 'login', component: LoginScreenComponent },
    { path: 'sign-up', component: SignupScreenComponent}
  ]

  constructor(){ }

  ngOnInit(): void {
  }

  goToSignUp() {
    return alert("Sign Up Works");
  }
  goToLogin() {
    return alert("Login Works");
  }

}

export class userLogin {
  userName = new FormControl('');
  passWord = new FormControl('');
}