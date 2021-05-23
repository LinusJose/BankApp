import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class DataService{ 
  currentUser="";
  accountDetails:any = {
    1000: { acno: 1000,  username: "userone", password: "userone", balance: 50000 },
    1001: { acno: 1001, username: "usertwo", password: "usertwo", balance: 5000 },
    1002: { acno: 1002,  username: "userthree", password: "userthree", balance: 10000 },
    1003: { acno: 1003,  username: "userfour", password: "userfour", balance: 6000 }
  };

  constructor() { 
    this.getDetails();
  }
  saveDetails(){
    localStorage.setItem("accountDetails",JSON.stringify(this.accountDetails))
    if(this.currentUser){
    localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
  }
}
  getDetails(){
    if(localStorage.getItem("accountDetails")){
    this.accountDetails=JSON.parse(localStorage.getItem("accountDetails") || '')
    
    }
    if(localStorage.getItem("currentUser")){

    this.currentUser=JSON.parse(localStorage.getItem("currentUser") || '')
    } 
  
  }
  register(uname:any,acno:any,pswd:any){
    let user=this.accountDetails;
    if(acno in user ){
      return false;
      // alert("user exists...pl login")
    }
    else{
      user[acno]={
        acno,
        username:uname,
        password:pswd,
        balance:0
    }
    this.saveDetails();
    return true;
    // alert("Registration Successfull");
  
    // this.router.navigateByUrl("")
    }
  }
login(acno:any,pswd:any){
  let users=this.accountDetails;
  if (acno in users) {

    if(pswd == users[acno]["password"]){
      this.currentUser=users[acno]["username"]
      this.saveDetails();
      return true;
      // alert("login success");
      // this.router.navigateByUrl("dashboard")
    }
  
    else{
     alert("incorrect password")//invalid username or password
     return false;
    }
  }
  else{
    alert("invalid acount")//invalid account number
    return false;
  }
}
deposit(acno:any,pswd:any,amt:any){
  var amount=parseInt(amt)
  let user=this.accountDetails;
  if (acno in user){
    if(pswd == user[acno]["password"]){
      user[acno]["balance"]+=amount;
      this.saveDetails();
      return user[acno]["balance"];
    }
    else{
      alert("incorrect password")
    return false;
    }

  }

else{
  alert("invalid account")
  return false;
}
}

withdraw(acno:any,pswd:any,amt:any){
  var amount=parseInt(amt)
  let user=this.accountDetails;
  if (acno in user){
    if(pswd == user[acno]["password"]){


      if(user[acno]["balance"]>amount){
        user[acno]["balance"]-=amount;
        this.saveDetails();

      return user[acno]["balance"];
    }
    else{
      alert("in balance")
    return false;
    }

  }

else{
  alert("incrct pswd")
  return false;
}
}
else{
  alert("inv acnt")
  return false;
}
}
}
// function accno(accno: any, any: any, pswd: any, any: any, amt: any, any: any) {
//   throw new Error('Function not implemented.');
// }

