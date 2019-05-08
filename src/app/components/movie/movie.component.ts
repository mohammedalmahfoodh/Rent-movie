import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/Movies';
import { LoginService } from 'src/app/services/login.service';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
username:string;
p: number = 1;
moviesToDisplay:Movies;

  constructor(private httpService:LoginService) { 
  this.moviesToDisplay  =new Movies();
  }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('userLoggedIn')) == true) {
      // this.userLoggedIn = true;
       this.username=localStorage.getItem('userName')
    }
  }
  
   sendOneMovieToDisplay(movie:Movie){
     localStorage.setItem ('movieToDisplay',JSON.stringify(movie))
   }
  //###### auto complete ##########
  errorTitle:string=null;
  
  errorName;
  moviesLength;
  movieName: string = "";
  resetErrorName() {
    this.errorName = null;

  }
  getMovies() {
    if (this.movieName.length >= 3) {
      this.httpService.getMovies(this.movieName).subscribe(
        res => {
          this.moviesToDisplay = res.body;
          console.log(res.body)    
          console.log(this.moviesToDisplay)    
          this.moviesLength = this.moviesToDisplay.search.length;
          this.moviesLength = false;
          
        },
        (error: any) => {
          this.errorName = `Error ${error.status}: that means the title not exists`;
          this.moviesLength = true
          console.log(this.errorTitle)
        });
    }


  }
}
