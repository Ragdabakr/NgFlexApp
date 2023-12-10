import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ServicesModule } from '../services/services.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FooterComponent,HeaderComponent,InputComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule, 
    ServicesModule,
    RouterModule

  ],exports:[
    FormsModule,
    ReactiveFormsModule,
    InputComponent,
    HeaderComponent,
    FooterComponent
  ],
})
export class SharedModule { }
