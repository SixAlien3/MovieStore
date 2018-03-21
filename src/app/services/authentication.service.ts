import { Injectable } from '@angular/core';
import { JwtService } from './jwt.service';
import { ApiService } from './api.service';
import { Login } from '../shared/models/login';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import { BadInputError } from '../shared/utils/bad.input.error';
import { NotFoundError } from '../shared/utils/not.found.error';
import { AppError } from '../shared/utils/app.error';
import { User } from '../shared/models/user';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthenticationService {

  constructor(private apiService: ApiService, private jwtService: JwtService) {

  }
  user: User;
  login(userLogin: Login): Observable<string> {
    return this.apiService.create('/token', userLogin)
      .map(response => {
        if (response) {
          this.jwtService.saveToken(response);
          return true;
        }
        return false;
      })
      .catch(this.handleError);
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
    const decodedToken = new JwtHelper().decodeToken(token);
    this.user = decodedToken;
    return this.user;
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInputError(error.json()));
    }

    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    }

    return Observable.throw(new AppError(error));
  }
}
