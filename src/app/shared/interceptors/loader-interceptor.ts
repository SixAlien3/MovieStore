import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgProgress } from '@ngx-progressbar/core';
import { map, catchError, finalize } from 'rxjs/operators';



@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private progress: NgProgress) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.progress.start();

    return next.handle(req)
      .pipe(
        map(event => {
          return event;
        }),

        catchError(error => {
          return Observable.throw(error);
        }),

        finalize(() => {
          this.progress.complete();
        })
      );

    // .do((event: HttpEvent<any>) => {
    //   // if the event is for http response
    //   if (event instanceof HttpResponse) {
    //     // stop our loader here
    //     this.progress.complete();
    //   }

    // }, (err: any) => {
    //   // if any error (not for just HttpResponse) we stop our loader bar
    //   this.progress.complete();
    // });


  }


}
