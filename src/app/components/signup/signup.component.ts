import { Router } from '@angular/router';
import { Customer } from './../../models/Customer';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  customer: Customer;
  signUpForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router:Router,
    private loginService: LoginService) {
    this.customer = new Customer();
  }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      firstName: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
      socialSecurityNumber: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      address: new FormControl(''),
    });
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      socialSecurityNumber: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required]

    });

  }
  public getform() {
    return this.signUpForm.controls;
  }
  onCreateCustomer(): void {
    /* console.log(this.signUpForm.controls.username);
    
    this.customer.firstName=this.getform()['firstName'].value;
     console.log(this.customer.firstName)*/
    if (this.signUpForm.valid == true) {

      this.customer.firstName = this.getform()['firstName'].value;
      this.customer.username = this.getform()['username'].value;
      this.customer.email = this.getform()['email'].value;
      this.customer.password = this.getform()['password'].value;
      this.customer.socialsecuritynumber = this.getform()['socialSecurityNumber'].value;
      this.customer.phone = this.getform()['phone'].value;
      this.customer.address = this.getform()['address'].value;

      this.loginService.createCustomer(this.customer).subscribe(res => {
        console.log(res.body)

        
      });
      

     // console.log(this.customer)
    }
    //location.reload();
    this.router.navigate(['/login'])

  }


}
