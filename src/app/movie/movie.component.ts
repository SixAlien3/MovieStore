import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { Movie } from '../shared/models/movie';
import { Credits } from '../shared/models/credits';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  photo = 'http://image.tmdb.org/t/p/original//mhdeE1yShHTaDbJVdWyTlzFvNkr.jpg';
  movie: Movie;
  id: number;
  credits: Credits;
  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(
      params => {
        //  console.log(this.route.snapshot.url);
        this.id = +params.get('id');
        if (this.id > 0) {

          this.movieService.getMovieDetailsByTmdbId(this.id)
            .subscribe(
              m => {
                this.movie = m;
                // console.table(this.movie);
              }
            );

          this.movieService.getMovieCreditsByMovie(this.id)
            .subscribe(
              m => {
                this.credits = m;
                // console.table(this.credits.cast);
                // console.table(this.credits.crew);
              }
            );


        }

      }
    );

  }

}
