

import{DataService} from '../services/data.service';
import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
aim="your perfect partner"
acno="account number please"
pswd="";

  constructor(private router:Router,private dataService:DataService) { }

  ngOnInit(): void {
  }

  
  login(){
  var acno = this.acno;
  var pswd=this.pswd;
  const result=this.dataService.login(acno,pswd)
  if(result){
    alert("login success");
      this.router.navigateByUrl("dashboard")
  }
  // let users=this.dataService.accountDetails;
  // if (acno in users) {

  //   if(pswd == users[acno]["password"]){
  //     alert("login success");
  //     this.router.navigateByUrl("dashboard")
  //   }
  
  //   else{
  //    alert("incorrect password")//invalid username or password
  //   }
  // }
  // else{
  //   alert("invalid acount")//invalid account number
  // }
}
register(){
  this.router.navigateByUrl("register");
}
}