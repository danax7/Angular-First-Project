import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface userData {
  fullName: string;
  password: string;
  email: string;
  birthDate: string;
  gender: string;
  phoneNumber: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  constructor() {}
  // constructor(private http: HttpClient) {}

  login() {
    this.isAuthenticated = true;
  }

  logout() {
    this.isAuthenticated = false;
  }

  getIsAuthenticated() {
    return this.isAuthenticated;
  }

  // registerUser(regiserData: userData): Observable<any> {
  //   const registerUrl = 'https://blog.kreosoft.space/api/account/register';
  //   return this.http.post(registerUrl, regiserData);
  // }
}
