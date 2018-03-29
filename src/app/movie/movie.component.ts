import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { Movie } from '../shared/models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  photo = 'http://image.tmdb.org/t/p/original//mhdeE1yShHTaDbJVdWyTlzFvNkr.jpg';
  movie: Movie;
  id: number;
  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(
      params => {
        console.log(this.route.snapshot.url);
      this.id = +params.get('id');
        if (this.id > 0) {
          this.movieService.getMovieDetailsByTmdbId(this.id)
            .subscribe(
              g => {
                this.movie = g;
                console.table(this.movie);
              }
            );
        }

      }
    );

  }

}
