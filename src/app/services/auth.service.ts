import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as jwt_decode from "jwt-decode";
import {Observable, tap} from "rxjs";
import {ILogin} from "../models/login";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) {  }

  isAuth: boolean = false
  auth(user: ILogin): Observable<{token: string}> {
    return this.http.post<{ token: string }> ("http://localhost:5000/api/user/registration", user)

  }
  login(user: ILogin): Observable<{ token: string }>  {
    return this.http.post<{ token: string }> ("http://localhost:5000/api/user/login", user).pipe(tap(() => this.isAuth = true))
  }
  logout() {
    this.isAuth = false
  }
}
