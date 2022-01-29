import { Component, OnInit } from '@angular/core';
import { 
  FormBuilder, 
  FormGroup, 
  Validators, 
  FormControl
} from '@angular/forms';
import { User } from 'user/user.model';

@Component({
  selector: 'app-signup-screen',
  templateUrl: './signup-screen.component.html',
  styleUrls: ['./signup-screen.component.css']
})
export class SignupScreenComponent implements OnInit {

  // all form controls
  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  cowName = new FormControl('', Validators.required);

  // this will be used for when the backend is updating
  // ideally the firebase used will be fast and not need this
  loading = false;

  // should study what this does
  constructor() { }

  // check if the values need to be set on init
  ngOnInit(): void { }

  onSubmit() {
    // later this will be used to update the backend values
    console.log("The submit button works");
  }
}
