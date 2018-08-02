
// tslint:disable-next-line:import-blacklist
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { JwtService } from './jwt.service';
import { ApiService } from './api.service';
import { Login } from '../shared/models/login';
import { BadInputError } from '../shared/utils/bad.input.error';
import { NotFoundError } from '../shared/utils/not.found.error';
import { AppError } from '../shared/utils/app.error';
import { User } from '../shared/models/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {

  constructor(private apiService: ApiService, private jwtService: JwtService) {

  }
  user: User;
  login(userLogin: Login): Observable<boolean> {
    return this.apiService.create('/token', userLogin)
     .pipe(map(response => {
        if (response) {
          this.jwtService.saveToken(response);
          return true;
        }
        return false;
      }));

  }

  logout() {
    this.jwtService.getToken();
  }

  get currentUserFullName(): string {
    if (this.decodedToken() != null) {
      const decodedResponse = this.decodedToken();
      const username = decodedResponse.firstName + ' ' + decodedResponse.lastName;
      return username;
    }
  }

  get isAdmin() {
    if (this.decodedToken() != null) {
      const roles = this.decodedToken().role;
      return roles.includes('Admin');
    }
  }

  private decodedToken(): User {
    const token = this.jwtService.getToken();
    if (!token) {
      return null;
    }
    const decodedToken = new JwtHelperService().decodeToken(token);
    this.user = decodedToken;
    return this.user;
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return observableThrowError(new BadInputError(error.json()));
    }

    if (error.status === 404) {
      return observableThrowError(new NotFoundError());
    }

    return observableThrowError(new AppError(error));
  }
}
