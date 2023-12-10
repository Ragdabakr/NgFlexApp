import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AuthHomeComponent } from './auth-home/auth-home.component';

const routes: Routes = [
  {
    path:'',
    component:AuthHomeComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes) ,
  
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
