import { LoginService } from './../../services/login.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit , OnDestroy {
  ngOnDestroy(): void {
    this.logout();
  }
  userLoggedIn:boolean;
  userName:string;
  constructor(private loginService:LoginService,private router : Router) {
    this.userName= localStorage.getItem('userName') 
  }
  
   logout(){
    this.loginService.logout().subscribe(
			res => {       
		
			},
			err => console.log(err)
      );			
      localStorage.removeItem('userLoggedIn');
      localStorage.removeItem('userName');	

   }
   getMovies(){
      this.loginService.getMovies('batman').subscribe(res=>{
        console.log(res.body);
      })
  }
  ngOnInit() {
    if(JSON.parse( localStorage.getItem('userLoggedIn') )  == true){
      this.userLoggedIn=true;
    }
    
  }
   
}
