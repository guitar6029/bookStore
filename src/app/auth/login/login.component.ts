import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/types/Form';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: Form = {
    email: '',
    password: '',
  };


 

  constructor(private authService: AuthService) {}

  submit() {
    this.authService.login(this.form);
  }

  isLoading(){
    return this.authService.isLoading;
  }

  ngOnInit(): void {}
}
