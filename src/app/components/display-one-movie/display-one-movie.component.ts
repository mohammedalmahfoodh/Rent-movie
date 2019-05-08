import { Movie } from 'src/app/models/Movie';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-display-one-movie',
  templateUrl: './display-one-movie.component.html',
  styleUrls: ['./display-one-movie.component.css']
})
export class DisplayOneMovieComponent implements OnInit {
  movie:Movie;
  rentForm:FormGroup;
  constructor(private formBuilder: FormBuilder,private movieService: MovieService,) {
    this.movie=new Movie();
    
   }

  ngOnInit() {
    this.movie=JSON.parse(localStorage.getItem('movieToDisplay'));
    this.rentForm=new FormGroup({
      selectDays:new FormControl('')
    });
    this.rentForm = this.formBuilder.group({
      selectDays: ['', Validators.required]
     
    });

  }
  public getform() {
    return this.rentForm.controls;
  }
  clicked:boolean;
  checkRentForm():boolean{
    if (this.rentForm.invalid && this.rentForm.untouched && this.clicked ) {
      return true;
    }
    
  }
  rentMovie(){
    this.clicked=true;
    if (this.rentForm.valid == true) {
      this.movie.numberOfDays=this.getform()['selectDays'].value;    
     // console.log(this.movie)
      this.movieService.rentMovie(this.movie).subscribe(res=>{
       console.log(res)
      });
    }
    
  }
}
