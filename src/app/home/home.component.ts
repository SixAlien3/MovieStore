import { Movie } from './../shared/models/movie';
import { MovieService } from './../services/movie.service';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movie[];
  movies2: Movie[];
  tabMovies: Movie[];
  private tabSet: ViewContainerRef;

  @ViewChild(NgbTabset) set content(content: ViewContainerRef) {
    this.tabSet = content;
  };

  constructor(private movieService: MovieService) { }

  ngAfterViewInit() {
    console.log('Tab Initialized');
    console.log(this.tabSet);
  }

  selectedTab(tab) {
    console.log('selected tab fired!');
    console.log(tab);
  }

  ngOnInit() {
    this.movieService.getNowPlayingMovies()
      .subscribe(
        m => {
          this.movies = m.slice(0, 6);
          this.movies2 = m.slice(6, 12);
        }
      );
  }

  tabSelected(x) {
    console.log('Tab selected');
    console.log(x);
  }

}
