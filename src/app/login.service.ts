import { Injectable, ApplicationInitStatus } from '@angular/core';
import {Admin } from './admin.models';
import { HttpClient } from '@angular/common/http';
import { AbstractControl } from '@angular/forms';
import { Login } from './login';
import { Observable } from 'rxjs';
import { LoginStatus } from './loginstatus';
import {loanStatus} from './loan.status.model';
import { UrlHandlingStrategy } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';
import {Applications} from './applications';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  applications:Applications[];
  loans:loanStatus[];
  admin:Admin;
  isloggedin=false;

  constructor(private http:HttpClient) {
    this.loans=[];
   }

   public getApplications(){
     console.log("dekhlo loan kise chahiye");
     return this.http.get("");


   }
   public showLoan(){
     console.log("Hii Admin");
     return this.http.get("");

   }
   public changeLoanStatus(aid:any,status:any){
     return this.http.get("http://"+status.value);
   }


  loggingin(login: Login){
    let url='http://localhost:8090/login';
    return this.http.post(url,login);
  }
  public adminlogin(admin:Admin){
   return this.http.post("http://localhost:4204/api/AdminPage",admin);
}
}
