import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { UserForRegistrationDto } from '../services/dto/UserForRegistrationDto';
import { Router } from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-auth',
  templateUrl: `./auth.component.html`,
  styleUrls: [`./auth.component.css`]
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  loginForm!: FormGroup;
  registerForm!: FormGroup;
  message: string = '';
  private token = "";
  private userId = 0;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

    this.registerForm = this.fb.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  login(_userName: string = '', _password: string = '') {
    const userName = this.loginForm.value.userName;
    const password = this.loginForm.value.password;

    this.authService.login(userName, password)
      .subscribe((res: any) => {
        this.token = res.token;
        this.userId = res.userId;
        this.setSession();
        this.router.navigate(['/products']);
        this.message = 'Login succeeded';
      })
  }

  register() {
    const user: UserForRegistrationDto = {
      userName: this.registerForm.value.userName,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    };

    this.authService.register(user).subscribe(
      (response: string) => {
        this.message = 'Registration succeeded';
        this.switchMode();
      },
      (err: any) => {
        this.message = 'Registration failed';
      }
    )
  }

  switchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

 setSession() {
    localStorage.setItem('token', this.token);
    localStorage.setItem('userId', this.userId.toString());
  }

  getSession(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      this.token = token;
      return true;
    }
    return false;
  }

  checkIfLoggedIn(): boolean {
    return this.getSession();
  }

}
