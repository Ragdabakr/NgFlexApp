import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Register } from 'src/app/types/register';
import { Observable, map } from 'rxjs';
import { TokenDto, UserSession } from 'src/app/types/token';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  showRequestedToken:any;
  userToken$: Observable<Register>| null = null;
  token$: Observable<TokenDto>| null = null;
  userSessionId$: Observable<UserSession>| null = null;
  authForm = new FormGroup(
    {
      username: new FormControl('', [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(40)
    ]),
        password: new FormControl('', [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(40)
        ]),
        request_token: new FormControl('', [
         
      ]),

    } 
);

  constructor(private authService: AuthService ,  private _router: Router , private route: ActivatedRoute) {}

  ngOnInit(): void {

   this.showRequestedToken = localStorage.getItem('requestToken') || '';
  }

  onSubmit() {
  if (this.authForm.invalid) {
      return;
  }
  const registerData ={
    username : this.authForm.value.username || '',
    password : this.authForm.value.password || '',
    request_token: this.showRequestedToken.replace(/^"|"$/g, ''),
  }
  this.authService.ValidateWithLogin(registerData).subscribe({
    next: response => {
      if (response === null){return}
      const token$ = response.request_token;
      localStorage.setItem('token',token$);
      this._router.navigate(['home'])
        }
     })   
  }
}