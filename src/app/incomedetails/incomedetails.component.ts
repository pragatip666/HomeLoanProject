import { IncomedetailsService } from './../incomedetails.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incomedetails',
  templateUrl: './incomedetails.component.html',
  styleUrls: ['./incomedetails.component.css']
})
export class IncomedetailsComponent implements OnInit {
  incomeobj: Income = new Income();
  constructor(private incomeService: IncomedetailsService) { }

  ngOnInit(): void {
  }
  addincome() {
    console.log("i am in");
    this.incomeService.addincome(this.incomeobj).subscribe(data => {
      alert(JSON.stringify(data));
    })
    console.log(this.incomeobj);
  }

}

export class Income {
  customerId: number;
  income: number;
  typeOfEmployment: String;
  organizationType: String;
  organizationName: String;
  employerName: String;
  amountNeeded: number;
  tenure: number;
  workingYears: number;

}