import { Customer } from './../../models/Customer';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userLoggedIn: boolean;
  username: string; 
  customer:Customer;
  constructor(private loginService:LoginService) {
    this.customer=new Customer();
   }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('userLoggedIn')) == true) {
     // this.userLoggedIn = true;
      this.username=localStorage.getItem('userName')
     this.loginService.getCustomer(this.username).subscribe(cus=>{
     
      
      this.customer=cus.body;
      console.log(cus.body)
      console.log(this.customer.phone)
     },
     err => console.log(err)

     );

      
    }
  }

}
