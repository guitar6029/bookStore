import { Injectable } from '@angular/core';
import { Form } from '../types/Form';
import { Register } from '../types/Register';
import {Router} from '@angular/router'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})

export class AuthService {


  constructor(private router: Router){

  }
  
  isAuthenticated: boolean = false;
  emailMatched: boolean = true;
  isLoading: boolean = false;

  login(form: Form) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthenticated = true;
        this.router.navigate(['']);
      })
      .catch((error) => {
        this.isAuthenticated = false;
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Email and/or password incorrect');
      })
      .finally(() => (this.isLoading = false));
  }

  register(form: Register) {
    if (this.isLoading) return;
    this.isLoading = true;
    //checks if emails match
    if (form.email !== form.confirmEmail) {
      this.emailMatched = false;
      return;
    }
    //firebase init create user
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthenticated = true;
        this.router.navigate(['login']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
        // ..
      })
      .finally(() => (this.isLoading = false));
  }


  logout(){
    const auth = getAuth();
    signOut(auth).then(()=> {
        console.log('signed out');
        this.router.navigate(['login']);
        this.isAuthenticated = false;
    }).catch((error) => {
      console.log(error);
    });
  }

  
}
