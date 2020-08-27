import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {LoginService} from '../login.service';
import {FormGroup,FormControl, FormControlName} from '@angular/forms';
import {loanStatus} from '../loan.status.model';
@Component({
  selector: 'app-select-applicants',
  templateUrl: './select-applicants.component.html',
  styleUrls: ['./select-applicants.component.css']
})
export class SelectApplicantsComponent implements OnInit {

  loans;
  
  abcd:FormGroup;
  result;
  allStatus:string[];
  
  constructor(private adminser :LoginService,private routes:Router,private cookie:CookieService , status:loanStatus) { 
  
  this.allStatus=["Form Submitted","Sent for Final Approval","Accepted","Rejected"];
  
    this.abcd=new FormGroup({
      Cstatus:new FormControl(null),
      appid:new FormControl(null)
  
  
    });
  }
  public get Cstatus(){
    return this.abcd.get('Cstatus');
  } 
  
  public get appid(){
    return this.abcd.get('appid');
  }
  changeStatus()
  {
    this.adminser.changeLoanStatus(this.appid,this.Cstatus).subscribe((data)=>{
      this.result=data;
      console.log(this.result);
    })
    
  }
  
    fetchLoanStatus(){
     
      this.adminser.showLoan().subscribe((data)=>{
      this.loans=data;
      console.log(this.loans);
      })
    }

  ngOnInit(): void {
  }

}

