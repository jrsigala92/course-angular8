import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }

  login(username: string, password: string): Observable<any> {
    let credentials: {};
    credentials = {
      email: username,
      password
    };

    return this.httpClient.post('https://reqres.in/api/login', credentials);
    console.log('Login From Service: ', username);
  }
}
