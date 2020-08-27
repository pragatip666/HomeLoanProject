import { Injectable } from '@angular/core';
import {Admin } from './admin.models';
import { HttpClient } from '@angular/common/http';
import { AbstractControl } from '@angular/forms';
import { Login } from './login';
import { Observable } from 'rxjs';
import { LoginStatus } from './loginstatus';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  getApplications: any;
  changeLoanStatus: any;
  showLoan: any;

  constructor(private http:HttpClient) { }
  loggingin(login: Login){
    let url='http://localhost:8090/login';
    return this.http.post(url,login);
  }
  public adminlogin(admin:Admin){
   return this.http.post("http://localhost:4204/api/AdminPage",admin);
}
}
