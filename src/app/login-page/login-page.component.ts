import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  buttonClicked = false;

  constructor(){ }
  
  onButtonClicked(buttonClicked: boolean){
    return buttonClicked == true;

    if (this.buttonClicked == true) {
      console.log("Button was Clicked!");
    } else {
      console.log("There was an Error");
    }
  }

  ngOnInit(): void {
  }

}
