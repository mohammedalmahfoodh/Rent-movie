import { Customer } from './../../models/Customer';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { ActivatedRoute, Params } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { timeout } from 'q';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLoggedIn: boolean;
  username: string;
  password: string;
  customer;
  constructor(private loginService: LoginService, private route: ActivatedRoute, private cookieService: CookieService) {
    this.authorizedCustomer = new Customer();
    if (localStorage.getItem('userLoggedIn') == '' || localStorage.getItem('userLoggedIn') == null) {
      this.userLoggedIn = false;
    } else {
      this.userLoggedIn = true;
    }

  }

  ngOnInit() {

  }
  authorizedCustomer: Customer;
  signIn() {
    this.loginService.sendCredential(this.username, this.password).subscribe(res => {
      


    },
      err => console.log(err)
    );
    this.userLoggedIn = true;
    JSON.stringify(localStorage.setItem('userLoggedIn', 'true'))
    JSON.stringify(localStorage.setItem('userName', this.username))
     setTimeout(function () {
      location.reload();

    }, 1500);

    setTimeout(a => {
      this.loginService.getCustomer(this.username).subscribe(cus => {
        this.authorizedCustomer = cus.body;
        console.log(this.authorizedCustomer.username)
      });
    },1500);



   /* setTimeout(function () {
      location.reload();

    }, 1500);*/


  }
  test() {
    //  console.log('It will test')
    if (this.cookieService.check('JSESSIONID') === true) {
      console.log('OOKK')
      this.userLoggedIn = true;
      JSON.stringify(localStorage.setItem('userLoggedIn', 'true'))
      JSON.stringify(localStorage.setItem('userName', this.username))

    }

  }





}
