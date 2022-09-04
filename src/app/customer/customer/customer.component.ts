import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  optionSelected! : number;
  constructor() { }

  ngOnInit(): void {

  }
  selectTab(value: number) {
    this.optionSelected = value;
  }

  
}
