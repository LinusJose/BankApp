import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

registerForm=this.fb.group({
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  acno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
})

  constructor(private dataService:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
register(){
  console.log(this.registerForm.get('uname')?.errors)
  if(this.registerForm.get('uname')?.errors){
    alert("username required")
  }
  
  // console.log(this.registerForm);
  
  // alert("register clicked");
  if(this.registerForm.valid)
{
  alert("valid form")
}
else{
  alert("invalid form")
}
  var uname=this.registerForm.value.uname;
  var acno=this.registerForm.value.acno;
  var pswd=this.registerForm.value.pswd;
  // console.log(uname,acno,pswd);

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
