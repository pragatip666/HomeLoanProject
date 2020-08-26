import { Injectable } from '@angular/core';
//import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Income } from './incomedetails/incomedetails.component';
@Injectable({
  providedIn: 'root'
})
export class IncomedetailsService {

  constructor(private http: HttpClient) { }

  addincome(income){
  const url= "http://localhost:8090/addIncome";
 // const headers = new HttpHeaders({'Content-Type': 'application/json'; charset=utf-8', 'Accept':'application/json'});
 const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8', 'Accept': 'application/json'}); 
 return this.http.post<Income>(url,income,{headers: headers});
}
}