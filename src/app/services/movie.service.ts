import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import {Observable} from 'rxjs/Rx';
import { Movie } from '../shared/models/movie';
import { Trailer } from '../shared/models/trailer';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Injectable()
export class MovieService {

  constructor(private apiService: ApiService) { }

  getNowPlayingMovies(): Observable<Movie[]> {
    return this.apiService.getAll('/movies/nowplaying');
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
    return this.apiService.getOne(`${'/movies/details/'}`,id);
  
  }
  getMovieandDetailsByTmdbId(id: number) {
      return Observable.forkJoin(
      this.apiService.getOne(`${'/movies/details/'}`,id)
    );
  }
  getMovieTrailers(id: number): Observable<Trailer[]> {
    return this.apiService.getAll(`${'/movies/videos/'}${id}`);
  }

}
