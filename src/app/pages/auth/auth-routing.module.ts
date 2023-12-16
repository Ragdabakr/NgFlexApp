import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthHomeComponent } from './auth-home/auth-home.component';

const routes: Routes = [
  {
    path:'',
    component:AuthHomeComponent
  },
  {
    path:'register',
    component:LoginComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes) ,
  
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
