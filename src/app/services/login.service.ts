import { Customer } from './../models/Customer';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from '../models/Movies';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor (private http: HttpClient) {}

  sendCredential(username: string, password: string) {
    let url = "http://localhost:8080/index";
    let params = 'username='+username+'&password='+password;
    let headers = new HttpHeaders(
    {
      'Content-Type': 'application/x-www-form-urlencoded'
      // 'Access-Control-Allow-Credentials' : true
    });
    return this.http.post(url, params,
       {headers: headers, withCredentials : true });
  }

  getMovies(movieName:string):Observable<HttpResponse<Movies>> {
    let url = "http://localhost:8080/movie/";
   return this.http.get<Movies>(url+movieName,{ withCredentials: true,observe: 'response' } );
  }

  logout() {
     let url = "http://localhost:8080/logout";
     return this.http.get(url, { withCredentials: true ,responseType: 'text' as 'json'});
   }

   getCustomer(username: string):Observable<HttpResponse<Customer>> {
    let url = "http://localhost:8080/api/customer?username="+username;
   return this.http.get<Customer>(url,{ withCredentials: true,observe: 'response' } );
  }
  createCustomer(customer: Customer): Observable<HttpResponse<any>> {
    let url = "http://localhost:8080/signupNewCustomer";
    return this.http.post<any>(url, customer,{ responseType: 'text' as 'json',observe: 'response' });
} 



}
