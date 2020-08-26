import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormControlName} from '@angular/forms';
import {LoginService} from '../login.service';
import { Router } from '@angular/router'; 
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-show-applicants',
  templateUrl: './show-applicants.component.html',
  styleUrls: ['./show-applicants.component.css']
})
export class ShowApplicantsComponent implements OnInit {
  applications;

  constructor(private adminser:LoginService,private routes:Router,private cookie:CookieService) { }

  fetchApplications(){
    this.adminser.getApplications().subscribe((data)=>{
      this.applications=data;
    })
  }

  logout()
  {
    this.cookie.delete('username');
    this.routes.navigate(['/admin']);
  }

  ngOnInit(): void {
  }

}
