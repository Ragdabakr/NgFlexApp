import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountDto, ShowData } from '../types/account';
import { Movie } from '../types/movie';
import { UserSession } from '../types/token';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = '56793b7cb2cd7c404ad6a593cb351c17';
  private accountId = '20675797';

  getAccountDetails() {
    return this.http
      .get<AccountDto>(`${this.apiUrl}/account/${this.accountId}?api_key=${this.apiKey}`);
  }

  addToUserWatchlist(showData:ShowData) {
    return this.http
      .post<ShowData>(`${this.apiUrl}/account/${this.accountId}/watchlist?api_key=${this.apiKey}` , showData);
  }
  
  getUserMovieWatchlist() {
    return this.http
      .get<Movie>(`${this.apiUrl}/account/${this.accountId}/watchlist/movies?api_key=${this.apiKey}`);
  }

 deleteGuestSession(sessionId:UserSession) {
    return this.http
      .post<UserSession>(`${this.apiUrl}/authentication/session?api_key=${this.apiKey}` , sessionId);
  }






 
}
