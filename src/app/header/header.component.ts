import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  message =" Lifespark Bank Of India"

  constructor() { }

  ngOnInit(): void {
  }

}
