import { Property } from './propertydetails/propertydetails.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertydetailsService {

  constructor(private http: HttpClient) { }
  addproperty(property) {
    const url= "http://localhost:8090/addProperty";
 // const headers = new HttpHeaders({'Content-Type': 'application/json'; charset=utf-8', 'Accept':'application/json'});
 const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8', 'Accept': 'application/json'}); 
return this.http.post<Property>(url,property,{headers: headers});
  }


}
