import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 
  depositForm=this.fb.group({
    acno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })
  withdrawForm=this.fb.group({
    acno:['',[Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]

  })
 user:any;
 acno:any;
 lDate:Date=new Date()
  constructor(private dataService:DataService, private fb:FormBuilder, private router:Router) {
    this.user=localStorage.getItem("name")
   }

  ngOnInit(): void {
  }
  deposit(){
if(this.depositForm.valid){
    var acno=this.depositForm.value.acno;
    var pswd=this.depositForm.value.pswd;
    var amount=this.depositForm.value.amount;
    this.dataService.deposit(acno,pswd,amount)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message);
      }},
      (result:any)=>{
        alert(result.error.message)

      })  
    } 
      else{
        alert("invalid Form")

    }
    
  }

  withdraw(){
    if(this.withdrawForm.valid){
    var acno=this.withdrawForm.value.acno;
    var pswd=this.withdrawForm.value.pswd;
    var amount=this.withdrawForm.value.amount;

    this.dataService.withdraw(acno,pswd,amount)


    .subscribe((result:any)=>{
      if(result){
        alert(result.message)
      }
    },
    (result:any)=>{
      alert(result.error.message);
    })
  }
  
  
    else{
      alert("invalid form")
    }
  }

onDelete(event:any){
this.dataService.deleteAccDetails(event)
.subscribe((result:any)=>{
  if(result){

    alert(result.message)
    this.router.navigateByUrl("")
    }
  },
  
  (result:any)=>{
  alert(result.error.message)
  })
}
onCancel(){
  this.acno=""
}
  
deleteAcc(){
     this.acno=localStorage.getItem("acno")
   } 
  
  }
  
