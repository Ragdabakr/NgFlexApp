import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Register } from '../types/register';
import { GuestSession } from '../types/guestSession';
import { TokenDto, UserSession } from 'src/app/types/token';
import { BehaviorSubject, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  public readonly TOKEN_NAME = 'auth_token';
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  get token(): any {
    return localStorage.getItem(this.TOKEN_NAME);
  }

  constructor(private http: HttpClient ,private router :Router) {
    this._isLoggedIn$.next(!!this.token);
  }

  

  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'a422ec0067dcc363352c74c54131c25b';


  
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
      .post<TokenDto>(`${this.apiUrl}/authentication/token/validate_with_login?api_key=${this.apiKey}` , registerData).pipe(
      tap((response: any) => {
        localStorage.setItem(this.TOKEN_NAME, response.request_token);
        this._isLoggedIn$.next(true);
      })
    );
  }

  getGestSession() {
    return this.http
      .get<GuestSession>(`${this.apiUrl}/authentication/guest_session/new?api_key=${this.apiKey}`);
     
  }
  logout(): void {
  this._isLoggedIn$.next(false);
  localStorage.removeItem(this.TOKEN_NAME);
  this.router.navigate(['/']);
}
 


}
