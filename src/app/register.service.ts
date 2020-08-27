//import { RegisterService } from './register.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Customer } from './applynow/applynow.component';
//import { Customer} from './registeration.component';
import { Register} from './register';
import { Customer} from './registration/registration;


@Injectable({
    providedIn: 'root'
 })

export class RegisterService {
    constructor(private http: HttpClient) { }

 register(customer){
       const url="http://localhost:8090/register";
       const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8', 'Accept': 'application/json'});
        return this.http.post<Customer>(url, customer, {headers: headers});
    }
}
