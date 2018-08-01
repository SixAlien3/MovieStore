import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../shared/models/movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  movies: Movie[];
  gid: number;
  @Input('genreId') genreId: number;
  @Input('searchTerm') searchTerm: string;
  urlsegmant: string;
  constructor(private movieService: MovieService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        console.log(this.route.snapshot.url);
        // console.log(this.route.snapshot.url[0].path);
        this.urlsegmant = this.route.snapshot.url[0].path;
        this.gid = +params.get('id');
        if (this.gid > 0) {
          this.movieService.getMoviesByGenre(this.gid)
            .subscribe(
              g => {
                this.movies = g;
                //  console.log('movie card called');
              }
            );
        } else if (this.urlsegmant === 'top') {
          this.movieService.getTopMovies()
            .subscribe(
              g => {
                this.movies = g;
              }
            );
        } else if (this.urlsegmant === 'popular') {

          this.movieService.getMostPopularMovies()
            .subscribe(
              g => {
                this.movies = g;
              }
            );
        } else if (this.urlsegmant === 'upcoming') {

          this.movieService.getUpComingMovies()
            .subscribe(
              g => {
                this.movies = g;
              }
            );
        }

      }
    );



  }
}


