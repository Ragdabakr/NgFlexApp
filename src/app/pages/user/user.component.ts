import { Component, OnInit } from '@angular/core';
import { AccountService } from './../../services/account.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  isAuthenticatedUser: boolean |null = null;

  constructor(private accountService:AccountService ,private authService: AuthService){}

  ngOnInit() {
    this.isAuthenticatedUser = this.authService.isAuthenticated();
  }

}

