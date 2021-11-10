import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-booking-modal',
  templateUrl: './booking-modal.component.html',
  styleUrls: ['./booking-modal.component.scss']
})
export class BookingModalComponent implements OnInit {

  @Input() resource : string = '';
  booking: Date = new Date();
  tableSize : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(e : Event){
    console.log(e);
  }
}
