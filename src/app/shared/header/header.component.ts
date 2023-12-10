import { Component, OnInit } from '@angular/core';
import { AccountService } from './../../services/account.service';
import { GuestSession } from 'src/app/types/guestSession';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  GuestSessionid:any;



  constructor(private accountService :AccountService ,   private _router: Router , ){ }
  ngOnInit(): void {
    this.GuestSessionid  = localStorage.getItem('guestSession') || '';
    this.GuestSessionid.replace(/^"|"$/g, '');
  }

  logout(){
    this.accountService.deleteGuestSession(this.GuestSessionid);
    this._router.navigate(['/'])
  }

}
