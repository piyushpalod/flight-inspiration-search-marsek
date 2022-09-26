import { AuthResponse } from './auth.model';
import { grantType, clientId, clientSecret, authUrl } from './oauth';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  body = new HttpParams()
    .set('grant_type', grantType)
    .set('client_id', clientId)
    .set('client_secret', clientSecret);

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  getToken(): string | null {
    return localStorage.getItem('token');
  }
  isAuthenticated(): boolean {
    return this.getToken() ? true : false;
  }
  authenticateUser(): void {
    this.httpClient
      .post<AuthResponse>(authUrl, this.body, this.httpOptions)
      .subscribe((response) => {
        localStorage.setItem('token', response.access_token);
      });
  }
}
