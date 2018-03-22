import { Movie } from './../shared/models/movie';
import { MovieService } from './../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movie[];
  movies2: Movie[];
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getNowPlayingMovies()
      .subscribe(
        m => {
          this.movies = m.slice(0, 6);
          this.movies2 = m.slice(6, 12);
        }
      );
  }

}
