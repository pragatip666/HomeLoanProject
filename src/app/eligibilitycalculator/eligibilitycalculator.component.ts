import { Options, LabelType } from 'ng5-slider';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'eligibilitycalculator',
  templateUrl: './eligibilitycalculator.component.html',
  styleUrls: ['./eligibilitycalculator.component.css']
})
export class EligibilitycalculatorComponent implements AfterViewInit {

  income = { value: 50};
  loan = { eligibleLoan: ""};

  income_options: Options = {                                               
    floor: 0,                                                                  
    ceil: 500,                                                                 
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + '<b>K</b>';
        case LabelType.High:
          return value + '<b>K</b>';
        default:
          return value + '<b>K</b>';
      }
    }
  };

  ngAfterViewInit(): void {
    this.process();
  }

  process(): void {
    var netIncome = Number(this.income.value) * 1000;
    var loan = 60 * (0.6 * netIncome);

    this.loan.eligibleLoan = loan.toFixed(0).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

}
