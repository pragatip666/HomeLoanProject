import { Component, OnInit } from '@angular/core';
import { Register } from './../register';
import { RegistrationService} from '../registration.service';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  register: Register=new Register();
  status: any;
  constructor(private service: RegistrationService){}
  registration(){
    alert(JSON.stringify(this.register));
    this.service.registerCustomer(this.register).subscribe(data => {
      this.status=data;
      alert(JSON.stringify(data));
    })
  }
}