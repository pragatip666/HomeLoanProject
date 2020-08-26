import { PropertydetailsService } from './../propertydetails.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertydetails',
  templateUrl: './propertydetails.component.html',
  styleUrls: ['./propertydetails.component.css']
})
export class PropertydetailsComponent implements OnInit {
property: Property = new Property();
  constructor(private propertyservice: PropertydetailsService ) { }

  ngOnInit(): void {
  }
  addproperty() {
    console.log("i am in");
    this.propertyservice.addproperty(this.property).subscribe(data => {
      alert(JSON.stringify(data));
    })
    //console.log(this.incomeobj);
  }
  }




export class Property {
  loanId: number;
  propertyName: String;
  estimatedAmount: number;
  propertyLocation: String;

}