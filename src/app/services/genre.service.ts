import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Genre } from '../shared/models/genre';

@Injectable()
export class GenreService {

  constructor(private apiService: ApiService) { }

  getAllGenres(): Observable<Genre[]> {
    return this.apiService.getAll('/genres');
  }
}
