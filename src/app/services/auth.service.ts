import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Register } from '../types/register';
import { GuestSession } from '../types/guestSession';
import { TokenDto, UserSession } from 'src/app/types/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = '56793b7cb2cd7c404ad6a593cb351c17';

  getRequestToken() {
    return this.http
      .get<TokenDto>(`${this.apiUrl}/authentication/token/new?api_key=${this.apiKey}`);
  }

  createUserSession(request_token:any) {
    return this.http
      .post<UserSession>(`${this.apiUrl}/authentication/session/new?api_key=${this.apiKey}` , request_token);
  }

  ValidateWithLogin(registerData:Register) {
    return this.http
      .post<TokenDto>(`${this.apiUrl}/authentication/token/validate_with_login?api_key=${this.apiKey}` , registerData);
  }


  getGestSession() {
    return this.http
      .get<GuestSession>(`${this.apiUrl}/authentication/guest_session/new?api_key=${this.apiKey}`);
     
  }
  logout(): void {
    localStorage.removeItem('token');
  }
 
  getToken(): string | null {
    return localStorage.getItem('token');
  }
 
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

}
