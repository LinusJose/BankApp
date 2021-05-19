import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{DataService} from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname="";
  acno="";
  pswd="";

  constructor(private dataService:DataService,private router:Router) { }

  ngOnInit(): void {
  }
register(){
  alert("register clicked");
  var uname=this.uname;
  var acno=this.acno;
  var pswd=this.pswd;
  const result=this.dataService.register(uname,acno,pswd)
  if(result){
    alert("Registration Successfull");
  
    this.router.navigateByUrl("")
  }
  else{
    alert("user exists...pl login")

  }
// let user=this.dataService.accountDetails;
// if(acno in user ){
//   alert("user exists...pl login")
// }
// else{
//   user[acno]={
//     acno,
//     username:uname,
//     password:pswd,
//     balance:0
// }
// alert("Registration Successfull");
// this.router.navigateByUrl("")
// }
}
}
