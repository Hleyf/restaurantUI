import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.scss']
})
export class FeedCardComponent implements OnInit {

  @Input() title : string = '';
  @Input() description : string = '';
  @Input() source : string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
