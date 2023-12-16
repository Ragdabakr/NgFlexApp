import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { GuestSession } from 'src/app/types/guestSession';
import { TokenDto } from 'src/app/types/token';

@Component({
  selector: 'app-auth-home',
  templateUrl: './auth-home.component.html',
  styleUrls: ['./auth-home.component.scss']
})
export class AuthHomeComponent{
  loading: any |null = null;
  token$ :Observable <TokenDto> | null = null;
  guestSession$  :Observable <GuestSession> | null = null;

 constructor(private authService: AuthService , private _router: Router) {}

login(){
  this.token$ =this.authService.getRequestToken();
  this.token$.subscribe(data => {
    localStorage.setItem('requestToken', JSON.stringify(data.request_token));
    this._router.navigate(['register']);
   });
}

guest(){
  this.guestSession$ =this.authService.getGestSession();
  this.guestSession$.subscribe(data => {
    localStorage.setItem('guestSession', JSON.stringify(data.guest_session_id));
    this._router.navigate(['home']);
   });
}


}
