import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  customerName: string;
  ngOnInit(): void {
    this.customerName=sessionStorage.getItem('customerName');
  }

}
