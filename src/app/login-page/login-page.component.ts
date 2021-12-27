import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

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