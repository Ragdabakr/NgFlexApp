import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HTTP_INTERCEPTORS,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  import { AuthService } from '../services/auth.service';



  @Injectable()
  export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}
  
    intercept(
      request: HttpRequest<unknown>,
      next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
      const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDIyZWMwMDY3ZGNjMzYzMzUyYzc0YzU0MTMxYzI1YiIsInN1YiI6IjY1N2Q0OGI4MWRhN2E2MDczMjJhNDNjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OuKPdG9gu3L2Hl2q0YHbzHRDgmft4jotTdYXcg0jODA';
      const isLoggedIn = this.authService.isLoggedIn$;
      if (isLoggedIn) {
        request = request.clone({
          setHeaders: { Authorization: `Bearer ${token}` }
        });
      }
   
      return next.handle(request);
    }
      
  }
  
  export const AuthInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  };