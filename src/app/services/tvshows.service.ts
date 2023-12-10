import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs';
import { Tvshow, TvshowsDto } from '../types/tvshow';
import { CreditsDto } from '../types/credits';
import { VideosDto } from '../types/video';
import { ImagesDto } from '../types/image';

@Injectable({
  providedIn: 'root',
})
export class TvshowsService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = '8c247ea0b4b56ed2ff7d41c9a833aa77';

  constructor(private http: HttpClient) {}

  getTvShowsByType(type: string, count = 20) {
    return this.http
      .get<TvshowsDto>(`${this.apiUrl}/tv/${type}?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results.slice(0, count)));
  }

getTvShowById(id: string) {
  return this.http.get<Tvshow>(
    `${this.apiUrl}/tv/${id}?api_key=${this.apiKey}`
  );
}

getTvShowVideos(id: string) {
  return this.http.get<VideosDto>(
    `${this.apiUrl}/tv/${id}/videos?api_key=${this.apiKey}`)
    .pipe(map((data) => data.results));
}

getTvImages(id: string) {
  return this.http.get<ImagesDto>(
    `${this.apiUrl}/tv/${id}/images?api_key=${this.apiKey}`)
    .pipe(map((data) => data.backdrops));
}

getSearchTvShoes(pageNumber: number , searchValue?:string, ) {
  const uri = searchValue ? 'search/tv' : 'tv/popular';
  return this.http
    .get<TvshowsDto>(`${this.apiUrl}/${uri}?query=${searchValue}&page=${pageNumber}&api_key=${this.apiKey}`)
}
getTvShowSimilar(id: string) {
  return this.http
    .get<TvshowsDto>(`${this.apiUrl}/tv/${id}/similar?api_key=${this.apiKey}`)
    .pipe(map((data) => data.results.slice(0, 12)));
}

getTvShowCast(id: string) {
  return this.http
    .get<CreditsDto>(`${this.apiUrl}/tv/${id}/credits?api_key=${this.apiKey}`)
    .pipe(map((data) => data.cast));
}

}


