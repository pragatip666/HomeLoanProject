import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register} from './register';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient){}

  registerCustomer(register: Register){
    let url='http://localhost:8090/register';
    return this.http.post(url,register);
  }
}
