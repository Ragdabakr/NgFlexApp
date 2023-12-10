
import { NgModule, ModuleWithProviders } from '@angular/core';
import { MoviesService } from './movies.service';
import { TvshowsService } from './tvshows.service';
import { AuthService } from './auth.service';
import { AccountService } from './account.service';


@NgModule({})
export class ServicesModule {
    static forRoot() {
       return {
         ngModule: ServicesModule,
         providers: [
          MoviesService,
          TvshowsService,
          AuthService,
          AccountService
         ],
       };
    }
  }
  
