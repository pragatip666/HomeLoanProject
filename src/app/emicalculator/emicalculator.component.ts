import { Component, AfterViewInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'emicalculator',
  templateUrl: './emicalculator.component.html',
  styleUrls: ['./emicalculator.component.css']
})

export class EmicalculatorComponent implements AfterViewInit {      
  //AfterViewInit is an Interface having a callback method ngAfterViewInit which runs only
  //after the component's view has been full instantiated, in other words, fully loaded.

  principal = { value: "40" }                                                  //Initial principal value : 40 => 4000000
  interestRate = { value: "8.5" }
  tenureInYears = { value: "10" }                                              //Initial number of years given : 10 years

  query = {                                                                    //To display the raw inputs by the user
    amount: "",
    tenureYr: ""
  }

  result = {                                                                   //To display the processed outputs
    emi: "",
    interest: "",
    total: ""
  }

  principal_options: Options = {                                               //Specifications for Principal slider
    floor: 1,                                                                  //Minimum value : 1L
    ceil: 500,                                                                 //Maximum value : 500L i.e. 5 Crore
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + '<b>L</b>';
        case LabelType.High:
          return value + '<b>L</b>';
        default:
          return value + '<b>L</b>';
      }
    }
  };

  tenure_options: Options = {                                                  //Specifications for Tenure slider
    floor: 1,                                                                  //Minimum value : 1 year
    ceil: 25,                                                                  //Maximum value : 25 years
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + '<b>Yr</b>';
        case LabelType.High:
          return value + '<b>Yr</b>';
        default:
          return value + '<b>Yr</b>';
      }
    }
  };

  ngAfterViewInit() {                                                          //callback function of AfterViewInit interface
    this.process();                                                            //Calls the process() function for the initial values provided
  }

  preProcess(id) {                                                             //A preprocessing function recieving id from the text fields
    if (id == 0) {
      this.principal.value = (Number(this.query.amount) / 100000).toString();  //Updating the principal amount everytime the slider moves 
    }
    else if (id == 1) {                                                        //Updating the tenure everytime the slider moves
      this.tenureInYears.value = this.query.tenureYr;
    }
    this.process();                                                            //Calls the process() function again as/when the value gets updated
  }

  process(): void {                                                            //Main function where actual processing take place
    var loanAmount = Number(this.principal.value) * 100000;                    // x100000 because in the slider we have not given values actually in Lacs
    var numberOfMonths = Number(this.tenureInYears.value) * 12;
    var monthlyInterestRatio = (Number(this.interestRate.value) / 100) / 12;  

    //Storing them into "query" variable declared in the starting

    this.query.amount = loanAmount.toString();
    this.query.tenureYr = this.tenureInYears.value.toString();
    
    //Formula for EMI is:
    //    EMI = P  *  R  *  (1+R)^n
    //                    -----------
    //                    (1+R)^n - 1

    var numerator = Math.pow((1 + monthlyInterestRatio), numberOfMonths);      //(1+R)^n
    var denominator = numerator - 1;                                           //(1+R)^n - 1
    var T = numerator / denominator;
    var emi = ((loanAmount * monthlyInterestRatio) * T);                       //Monthly EMI                     
    var full = numberOfMonths * emi;                                           //Total Interest payable
    var interest = full - loanAmount;                                          //Total Payment : Interest + Amount

    //Below mentioned is just number formatting taking place using REGEX and storing them in the "result" variable declared in the starting..
    //Number formatting ex: 1234567 => 1,324,567
    //                      1234 => 1,234
    //                      1234567890 => 1,234,567,890  

    this.result.emi = emi.toFixed(0).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    this.result.total = full.toFixed(0).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    this.result.interest = interest.toFixed(0).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}