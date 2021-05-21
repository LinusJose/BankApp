import{DataService} from '../services/data.service';
import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
aim="your perfect partner"


loginForm=this.fb.group({
  acno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

})

  constructor(private router:Router,private dataService:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  
  login(){
    if(this.loginForm.valid){
  var acno = this.loginForm.value.acno;
  var pswd=this.loginForm.value.pswd;
  const result=this.dataService.login(acno,pswd)
  if(result){
    alert("login success");
      this.router.navigateByUrl("dashboard")
  }
}
  else{
    alert("invalid form")
  }
}

register(){
  this.router.navigateByUrl("register");
}
}

