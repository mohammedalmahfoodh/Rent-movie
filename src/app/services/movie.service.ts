import { Movie } from 'src/app/models/Movie';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }


  rentMovie(movie: Movie): Observable<HttpResponse<any>> {
    let url = "http://localhost:8080/movie/addMovieToCustomer";
    return this.http.post<any>(url, movie,{withCredentials: true, responseType: 'text' as 'json',observe: 'response' });
} 
}
