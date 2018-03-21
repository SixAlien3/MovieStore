import { Directive, ElementRef, OnInit, HostListener, Input } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Directive({
  selector: '[appAnchorHref]'
})
export class AnchorHrefDirective implements OnInit {

  constructor(private el: ElementRef, private movieService: MovieService) { }

  ngOnInit(): void {

  }

  @HostListener('click') onClick() {

    // console.log('On Click Worked!');
    const hrefValue: string = this.el.nativeElement.getAttribute('href');
    const tmdbId: string = this.el.nativeElement.getAttribute('data-tmdbid');
     console.log(hrefValue);
    if (!hrefValue || hrefValue === '#' || (hrefValue && hrefValue.length === 0)) {
      event.preventDefault();
      event.stopPropagation();

      this.movieService.getMovieTrailers(+tmdbId)
        .subscribe(
          g => {
            window.location.href = g.find(t => t.type === 'Trailer').url;
          }
        );

      // this.movieService.getMovieDetailsByTmdbId(+tmdbId)
      //   .subscribe(
      //     g => {
      //       window.location.href = g.imdbId;
      //     }
      //   );

    }
  }


}
