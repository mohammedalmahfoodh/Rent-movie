import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { MovieComponent } from './components/movie/movie.component';
import { DisplayOneMovieComponent } from './components/display-one-movie/display-one-movie.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
   path:'displayOneMovie',
   component:DisplayOneMovieComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path:'MovieComponent',
    component:MovieComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'navbar', component: NavBarComponent }
];
@NgModule({
  declarations: [],
  imports: [
   [ RouterModule.forRoot(routes) ],
    CommonModule,
  ],
  exports: [RouterModule]
})
export class RentMovieRoutingModule { }
