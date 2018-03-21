import { Component, OnInit, Input } from '@angular/core';
import { Genre } from '../shared/models/genre';
import { GenreService } from '../services/genre.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  genres: Genre[];
  // @Input('gId') gId: number;
  constructor(private genreService: GenreService) { }

  ngOnInit() {
    this.genreService.getAllGenres()
      .subscribe(
        g => {
          this.genres = g;
          // console.log('Child Componet received: ' + this.gId);
         // console.log('%c'+'Child Componet received' ,'color:purple;');

        }
      );
  }

}
