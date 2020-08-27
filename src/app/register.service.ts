import { Observable } from 'rxjs';
import { Status } from './../status';
import { Customer } from './registration/registration.component';
//import { RegisterService } from './register.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Customer } from './applynow/applynow.component';
//import { Customer} from './registeration.component';
//import { Register} from './register';
//import { Customer} from './registration/registration;
//import { Customer } from './customer';


@Injectable({
    providedIn: 'root'
 })

export class RegisterService {
    constructor(private http: HttpClient) { }

  register(customer: Customer) : Observable<Status> {
    let url = 'http://localhost:8090/register';
    return this.http.post<Status>(url, customer);
  }
}
