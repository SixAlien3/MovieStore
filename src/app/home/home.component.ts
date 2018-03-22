import { Movie } from './../shared/models/movie';
import { MovieService } from './../services/movie.service';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NgbTabset, NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';

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
    this.movieService.getNowPlayingMovies()
      .subscribe(
        m => {
          this.tabMovies = m.slice(0, 6);
        }
      );
  }

  selectedTab(tab: NgbTabChangeEvent) {
    // console.log('selected tab fired!');
    // console.log(tab);
    // console.log(tab.activeId);

    switch (tab.nextId) {
      case "comingSoontab": {
        this.movieService.getUpComingMovies()
          .subscribe(
            m => {
              this.tabMovies = m.slice(0, 6);
            }
          );
        break;
      }
      case "newTrailerstab": {
        this.movieService.getNowPlayingMovies()
          .subscribe(
            m => {
              this.tabMovies = m.slice(0, 6);
            }
          );
        break;
      }
      case "topRatedtab": {
        this.movieService.getTopMovies()
          .subscribe(
            m => {
              this.tabMovies = m.slice(0, 6);
            }
          );
        break;
      }
      case "populartab": {
        this.movieService.getMostPopularMovies()
          .subscribe(
            m => {
              this.tabMovies = m.slice(0, 6);
            }
          );
        break;
      }
      case "theatertab": {
        this.movieService.getNowPlayingMovies()
          .subscribe(
            m => {
              this.tabMovies = m.slice(0, 6);
            }
          );
        break;
      }
      default: {
        console.log("theatertab");
        break;
      }
    }

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



}
