
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
// tslint:disable-next-line:import-blacklist
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { BadInputError } from '../shared/utils/bad.input.error';
import { AppError } from '../shared/utils/app.error';
import { NotFoundError } from '../shared/utils/not.found.error';
import { KeyValue } from '@angular/common';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(protected http: HttpClient) { }

  getAll(path: string, searchParams?: Map<any, any>): Observable<any[]> {
    let params = new HttpParams();
    if (searchParams) {
      searchParams.forEach((value: string, key: string) => {
        //  console.log(key, value);
        params = params.append(key, value);
      });
    }
    console.log(params);
    const params2 = new HttpParams().set('_page', '1').set('_limit', '1');

    return this.http.get(`${environment.api_url}${path}`, { params: params })
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
