import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  buttonClicked = false;

  constructor(){
    if (this.buttonClicked == true) {
      console.log("Button was Clicked!");
    } else {
      console.log("Button Ready");
    }
  }
  onButtonClicked(buttonClicked: boolean){
    return buttonClicked == true;
  }

  ngOnInit(): void {
  }

}
