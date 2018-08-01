import { MovieService } from './services/movie.service';
import { GenreService } from './services/genre.service';
import { ApiService } from './services/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgProgressModule } from '@ngx-progressbar/core';


import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesFilterComponent } from './movie/movies-filter.component';
import { AdminMoviesComponent } from './admin/admin-movies.component';
import { AdminOrdersComponent } from './admin/admin-orders.component';
import { AdminMovieFormComponent } from './admin/admin-movie-form.component';
import { AdminMovieDetailsComponent } from './admin/admin-movie-details.component';
import { GenreComponent } from './genre/genre.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { MyMoviesComponent } from './customer/my-movies.component';
import { NotFoundComponent } from './shared/components/not-found.component';
import { ErrorComponent } from './shared/components/error.component';
import { HttpTokenInterceptor } from './shared/interceptors/http.token.interceptor';
import { JwtService } from './services/jwt.service';
import { AboutusComponent } from './core/components/aboutus.component';
import { ContactusComponent } from './core/components/contactus.component';
import { FooterComponent } from './shared/layout/footer.component';
import { HeaderComponent } from './shared/layout/header.component';
import { OrderComponent } from './orders/order.component';
import { CheckoutComponent } from './orders/checkout.component';
import { OrderSuccessComponent } from './orders/order-success.component';
import { SummaryPipe } from './shared/pipes/summary.pipe';
import { MovieCardComponent } from './movie/movie-card.component';
import { LoaderInterceptor } from './shared/interceptors/loader-interceptor';
import { AnchorHrefDirective } from './shared/directives/anchor-href.directive';
import { MovieCardSmallComponent } from './movie/movie-card-small.component';
import { PeopleComponent } from './people/people.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MoviesFilterComponent,
    AdminMoviesComponent,
    AdminOrdersComponent,
    AdminMovieFormComponent,
    AdminMovieDetailsComponent,
    GenreComponent,
    HomeComponent,
    LoginComponent,
    CustomerComponent,
    MyMoviesComponent,
    NotFoundComponent,
    ErrorComponent,
    AboutusComponent,
    ContactusComponent,
    FooterComponent,
    HeaderComponent,
    OrderComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    SummaryPipe,
    MovieCardComponent,
    AnchorHrefDirective,
    MovieCardSmallComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'movie/:id', component: MovieComponent },
      { path: 'person/:id', component: PeopleComponent },
      { path: 'movie/cast/:id', component: MoviesFilterComponent },
      { path: 'popular', component: MovieCardComponent },
      { path: 'top', component: MovieCardComponent },
      { path: 'genre/:id', component: MovieCardComponent },
      { path: 'login', component: LoginComponent },
      { path: 'upcoming', component: MovieCardComponent },
      { path: 'about', component: AboutusComponent },
      { path: 'contact', component: ContactusComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'ordersuccess', component: OrderSuccessComponent },
      { path: 'my/movies', component: MyMoviesComponent },

      { path: 'admin/movies/new', component: AdminMovieFormComponent },
      { path: 'admin/movies/:movieid', component: AdminMovieDetailsComponent },
      // { path: 'admin/books/:booktitle/:bookid', component: AdminBookDetailsComponent, canActivate: [AuthGuard, AdminAuthGuard] },
      { path: 'admin/movies', component: AdminMoviesComponent },
      { path: 'admin/orders', component: AdminOrdersComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    ApiService,
    JwtService,
    GenreService,
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
