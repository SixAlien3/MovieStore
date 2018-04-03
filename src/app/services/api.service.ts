import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BadInputError } from '../shared/utils/bad.input.error';
import { AppError } from '../shared/utils/app.error';
import { NotFoundError } from '../shared/utils/not.found.error';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {

  constructor(protected http: HttpClient) { }

  getAll(path: string): Observable<any[]> {
    return this.http.get(`${environment.api_url}${path}`)
      .map(resp => resp as any[])
      .catch(this.handleError);

  }
  getOne(path: string, id: number): Observable<any> {
    return this.http.get(`${environment.api_url}${path}` + '/' + id)
      .map(resp => resp as any)
      .catch(this.handleError);

  }
  create(path: string, resource:Object = {}): Observable<any> {
    return this.http.post(`${environment.api_url}${path}`, JSON.stringify(resource))
      .map(response => response)
      .catch(this.handleError);
  }
  update(path: string, resource) {
    return this.http.put(`${environment.api_url}${path}` + '/' + resource.id, JSON.stringify({ isRead: true }))
      .map(response => response)
      .catch(this.handleError);
  }

  delete(path: string, id) {
    return this.http.delete(`${environment.api_url}${path}` + '/' + id)
      .map(response => response)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 400) { return Observable.throw(new BadInputError(error.json())); }

    if (error.status === 404) { return Observable.throw(new NotFoundError()); }

    return Observable.throw(new AppError(error));
  }
}
