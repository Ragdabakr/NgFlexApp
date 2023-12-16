import { Component, OnInit } from '@angular/core';
import { AccountService } from './../../services/account.service';
import { GuestSession } from 'src/app/types/guestSession';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { AccountDto } from 'src/app/types/account';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  GuestSessionid:any;
  userData$: Observable<AccountDto> | null = null;



  constructor(private accountService :AccountService ,  private AuthService:AuthService, private _router: Router , ){ }
  ngOnInit(): void {
    this.GuestSessionid  = localStorage.getItem('guestSession') || '';
    this.GuestSessionid.replace(/^"|"$/g, '');
    this.userData$= this.accountService.getAccountDetails();
  }

  // logout(){
  //   this.accountService.deleteGuestSession(this.GuestSessionid);
  //   this._router.navigate(['/'])
  // }

  logout(){
    this.AuthService.logout();
    this._router.navigate(['/'])
  }

}
