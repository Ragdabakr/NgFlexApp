import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { AuthHomeComponent } from './auth-home/auth-home.component';
import { AuthComponent } from './auth.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicesModule } from 'src/app/services/services.module';



@NgModule({
  declarations: [RegisterComponent,AuthHomeComponent,AuthComponent],
  imports: [
    CommonModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    ServicesModule,
    AuthRoutingModule,
    HttpClientModule,
    ButtonModule,
    AuthRoutingModule,
    SharedModule,
    RouterModule.forChild([{path: '', component: AuthComponent}]),

  ], schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AuthModule { }
