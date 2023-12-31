import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule } from '@angular/common/http';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { GenresComponent } from './pages/genres/genres.component';
import { AuthModule } from './pages/auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { ComponentsModule } from './components/components.module';
import { ShowsModule } from './pages/shows/shows.module';
import { ServicesModule } from './services/services.module';
import { UserModule } from './pages/user/user.module';
import { GenresModule } from './pages/genres/genres.module';
import { AuthInterceptorProvider } from './shared/auth.interceptor';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    GenresComponent,
    HomeComponent

  ],
  imports: [
    ServicesModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ImageModule,
    InputTextModule,
    FormsModule , // to use NgModel
    PaginatorModule,
    ComponentsModule,
    SharedModule,
    AuthModule,
    UserModule,
    ShowsModule,
    GenresModule,
    ComponentsModule,
    ServicesModule,
    
  ],
  providers: [
   AuthInterceptorProvider //send token to header
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
