import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/types/Register';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: Register = {
    email: '',
    confirmEmail: '',
    password: '',
  };
  constructor(private authService: AuthService) {}


  //create a user
  submit() {
    this.authService.register(this.form);
  }

  isLoading(){
    return this.authService.isLoading;
  }

  ngOnInit(): void {}
}
