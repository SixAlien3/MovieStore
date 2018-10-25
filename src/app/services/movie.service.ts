import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Movie } from '../shared/models/movie';
import { Trailer } from '../shared/models/trailer';
import { Credits } from '../shared/models/credits';
import { forkJoin } from 'rxjs';

@Injectable()
export class MovieService {

  constructor(private apiService: ApiService) { }

  getNowPlayingMovies(): Observable<Movie[]> {
    const myMap = new Map([
      ['company', 'google,microsoft|in '],
      ['client', 'time warner'],
      ['category', 'c#'],
    ]);
    return this.apiService.getAll('/movies/nowplaying', myMap);
  }
  getUpComingMovies(): Observable<Movie[]> {
    return this.apiService.getAll('/movies/upcoming');
  }
  getMostPopularMovies(): Observable<Movie[]> {
    return this.apiService.getAll('/movies/popular');
  }
  getTopMovies(): Observable<Movie[]> {
    return this.apiService.getAll('/movies/top');
  }
  getMoviesByGenre(genreId: number): Observable<Movie[]> {
    return this.apiService.getAll(`${'/movies/genre/'}${genreId}`);
  }

  getMovieDetailsByTmdbId(id: number): Observable<Movie> {
    return this.apiService.getOne(`${'/movies/details/'}`, id);

  }
  getMovieandDetailsByTmdbId(id: number) {
    return forkJoin(
      this.apiService.getOne(`${'/movies/details/'}`, id)
    );
  }

  getMovieCreditsByMovie(id: number): Observable<Credits> {
    return this.apiService.getOne(`${'/movies/credits/'}`, id);
  }

  getMovieTrailers(id: number): Observable<Trailer[]> {
    return this.apiService.getAll(`${'/movies/videos/'}${id}`);
  }

}
