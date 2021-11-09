import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { BookingModalComponent } from 'src/app/common/booking-modal/booking-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _modalService : NzModalService) { }

  ngOnInit(): void {
  }

  openBookinModal(){
    this._modalService.create({
      nzContent: BookingModalComponent,
      nzComponentParams: {
        resource : 'Reservar'
      }
    });
  }

}
