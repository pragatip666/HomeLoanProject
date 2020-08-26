import { Component, OnInit } from '@angular/core';
import { Register } from './../register';
import { RegistrationService} from '../registration.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
//import { MustMatch } from './_helpers/must-match.validator';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  //registration: FormGroup;
   // submitted = false;

  register: Register=new Register();
  status: any;
  constructor(private service: RegistrationService){}
  //private formBuilder: FormBuilder


  //ngOnInit() {
   // this.registration = this.formBuilder.group({
      //  panNo: ['', Validators.required],
       // aadharNo: ['', Validators.required],
       // name: ['', Validators.required],
       // phone: ['', Validators.required],
       // email: ['', [Validators.required, Validators.email]],
       // password: ['', [Validators.required, Validators.minLength(6)]],
       // dateOfBirth: ['', Validators.required],
        
     // },
     //  {
        //validator: MustMatch('password', 'confirmPassword')
     //  });
//}//
//get f() { return this.registration.controls; }
  registration(){
    alert('SUCCESS!! :-)\n\n' +JSON.stringify(this.register));
    this.service.registerCustomer(this.register).subscribe(data => {
     this.status=data;
      alert(JSON.stringify(data));
    })
   
  }
 }
  //onSubmit() {
  //  this.submitted = true;

    // stop here if form is invalid
   // if (this.registration.invalid) {
     //   return;
    //}

    // display form values on success
    //alert('SUCCESS!! :-)\n\n' +JSON.stringify(this.register));
    //this.service.registerCustomer(this.register).subscribe(data => {
     // this.status=data;
     // alert(JSON.stringify(data));
    //})
   
 // }
  

//onReset() {
   // this.submitted = false;
    //this.registration.reset();
//}
//}
