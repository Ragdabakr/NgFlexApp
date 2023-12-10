import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginatorState } from 'primeng/paginator';
import { Observable } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { Genre, Movie, MoviesDto } from 'src/app/types/movie';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit  {
  genres$: Observable<Genre[]> | null = null;
  showByGeners$: Observable<MoviesDto> |null = null;
  genreId: any;

  constructor(private mService: MoviesService, private route: ActivatedRoute) {}
  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.genreId = params['genreId'];
      this.showByGeners$ = this.mService.getMoviesByGenre(this.genreId);
    });
  this.genres$ = this.mService.getMoviesGenres();

}

getPagedShows( genreId:number, pageNumber:number ){
  // if(this.showType === 'movie'){
    this.showByGeners$= this.mService.getMoviesByGenre(this.genreId , pageNumber);
  // }

  }
  onPageChange(event: PaginatorState) {
    const pageNumber = event.page ? event.page + 1 : 1;
    console.log(pageNumber);
    this.getPagedShows( this.genreId , pageNumber);
  }
}
