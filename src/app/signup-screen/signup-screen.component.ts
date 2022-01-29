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
  username = new FormControl('');
  password = new FormControl('');
  cowName = new FormControl('');

  loading = false;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("The submit button works");
  }
}
