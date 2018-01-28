import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../../services/events/events.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'camex-last-events',
  templateUrl: './last-events.component.html',
  styleUrls: ['./last-events.component.css']
})
export class LastEventsComponent implements OnInit {
 events: Observable<any[]>;
  constructor(private _eventsService: EventsService) { }

  ngOnInit() {
    this.events = this._eventsService.getLastEvents();
  }

}
