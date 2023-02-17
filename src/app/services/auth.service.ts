import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserForRegistrationDto } from '../services/dto/UserForRegistrationDto';
import { catchError, tap } from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:5000/api/users/';
  private isLoggedIn = false;

  constructor(private http: HttpClient) { }

  register(user: UserForRegistrationDto) {
    return this.http.post<string>(`${this.apiUrl}register`, user).pipe(
      catchError((error) => {
        return throwError("Registration failed");
      })
    );
  }

  login(userName: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}login`, { userName, password }).pipe(
      tap(() => this.isLoggedIn = true),
      catchError((error) => {
        console.log(error)
        return throwError("Login failed");
      })
    );
  }

  checkIfLoggedIn() {
    return this.isLoggedIn;
  }
}
