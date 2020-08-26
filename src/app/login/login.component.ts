import { Component, OnInit } from '@angular/core';
import { Login } from './../login';
import { LoginService } from '../login.service';
import { LoginStatus } from './../loginstatus';
import { Router } from '@angular/router';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service: LoginService, private router: Router) { }
  login: Login=new Login();
  ls: any;
  error: string;
  loginUser(){
    alert(JSON.stringify(this.login));
    this.service.loggingin(this.login).subscribe(data => {
      this.ls=JSON.stringify(data);
      alert(this.ls);
      if(Object.values(data)[0] == "SUCCESS") {
        let customerId = Object.values(data)[2];
        let customerName = Object.values(data)[3];
        sessionStorage.setItem("customerId", customerId);
        sessionStorage.setItem("customerName", customerName);
        this.router.navigate(['dashboard']);
      }
      else
        this.error = Object.values(data)[1];
    })
  }
  

}
