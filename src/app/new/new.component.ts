import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
@Component({
  selector: 'app-root',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  @ViewChild('download', {static: false}) el!: ElementRef;
  constructor() { }

  ngOnInit(): void {
    
  }
  makepdf(){
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.el.nativeElement,{
      callback: (pdf) => {
    pdf.save("ticket.pdf");

      }
    })
  }
}
