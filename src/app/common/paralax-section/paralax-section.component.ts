import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paralax-section',
  templateUrl: './paralax-section.component.html',
  styleUrls: ['./paralax-section.component.scss']
})
export class ParalaxSectionComponent implements OnInit, AfterViewInit {

@Input() imgPath : string='';
@Input() title : string = '';
@Input() extra : string = '';
@Input() path : string = '';

  constructor() { }
  ngAfterViewInit(): void {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.
    });  }

  ngOnInit(): void {
  }

}
