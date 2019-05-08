import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RentMovieRoutingModule } from './rent-movie-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SignupComponent } from './components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieComponent } from './components/movie/movie.component';
import { RentMovieAngularMaterialModule } from './rent-movie-angular-material.module';
import { DisplayOneMovieComponent } from './components/display-one-movie/display-one-movie.component';
import { CookieService } from 'ngx-cookie-service';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavBarComponent,
    SignupComponent,
    MovieComponent,DisplayOneMovieComponent,FooterComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,NgxPaginationModule,
    HttpClientModule,FormsModule, RentMovieRoutingModule,ReactiveFormsModule, RentMovieAngularMaterialModule

  ],
  providers: [
    CookieService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
