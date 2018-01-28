import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'camex-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {
  @Input('course')course: any;
  constructor() { }

  ngOnInit() {
  }

}
