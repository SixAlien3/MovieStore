
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
// tslint:disable-next-line:import-blacklist
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { BadInputError } from '../shared/utils/bad.input.error';
import { AppError } from '../shared/utils/app.error';
import { NotFoundError } from '../shared/utils/not.found.error';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(protected http: HttpClient) { }

  getAll(path: string): Observable<any[]> {
    return this.http.get(`${environment.api_url}${path}`)
      .pipe(
        map(resp => resp as any[]));
  }
  getOne(path: string, id: number): Observable<any> {
    return this.http.get(`${environment.api_url}${path}` + '/' + id)
      .pipe(map(resp => resp as any));
  }
  create(path: string, resource: Object = {}): Observable<any> {
    return this.http.post(`${environment.api_url}${path}`, JSON.stringify(resource))
      .pipe(map(response => response));
  }
  update(path: string, resource) {
    return this.http.put(`${environment.api_url}${path}` + '/' + resource.id, JSON.stringify({ isRead: true }))
      .pipe(map(response => response));
  }

  delete(path: string, id) {
    return this.http.delete(`${environment.api_url}${path}` + '/' + id)
      .pipe(map(response => response));
  }

  // private handleError(error: Response) {
  //   if (error.status === 400) { return observableThrowError(new BadInputError(error.json())); }
  //   if (error.status === 404) { return observableThrowError(new NotFoundError()); }
  //   if (error.status === 500) { return observableThrowError(new AppError()); }
  //   return observableThrowError(new AppError(error));
  // }
}
