import { Router } from '@angular/router';
import { RegisterService } from './../register.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  customer: Customer = new Customer();

  constructor(private customerService: RegisterService, private router: Router) { }

  register() {
    alert("You have been registered!!");
    this.customerService.register(this.customer).subscribe(data => {
      //alert(JSON.stringify(data));
      if(data.status == 'SUCCESS') {
       this.router.navigate(['login'])
      }
      else {
        //missing code right now
      }
    }) }}

export class Customer{
  customerName: String;
  dateOfBirth: Date;
  email: String;
  password: String;
  nationality: String;
  aadharNo: String;
  panNo: String;
  phone: String;
  gender: String;
}
