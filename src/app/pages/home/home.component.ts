import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { TvshowsService } from '../../services/tvshows.service';
import { map } from 'rxjs';
import { mapToMovies } from '../../types/tvshow';
import { AccountService } from './../../services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  popularMovies$ = this.moviesService.getMoviesByType('popular', 12);
  upcomingMovies$ = this.moviesService.getMoviesByType('upcoming', 12);
  topRatedMovies$ = this.moviesService.getMoviesByType('top_rated', 12);
  popularTvshows$ = this.tvshowsService
    .getTvShowsByType('popular', 12)
    .pipe(map(mapToMovies));

  constructor(
    private moviesService: MoviesService,
    private tvshowsService: TvshowsService,
    private AccountService:AccountService
  ) {}

  addMovieToWatchlist(show:any){
    const showData = {
     media_type:"movie",
     media_id:"show.id",
     watchlist: "true"
     }
     this.AccountService.addToUserWatchlist(showData);
   }

}
