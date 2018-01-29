import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventsService } from '../../../services/events/events.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'camex-last-events',
  templateUrl: './last-events.component.html',
  styleUrls: ['./last-events.component.css']
})
export class LastEventsComponent implements OnInit, OnDestroy {
 events: Observable<any[]>;
 subscription: Subscription;
  constructor(private _eventsService: EventsService, private _router: Router) { }

  ngOnInit() {
    this.subscription = this._eventsService.getLastEvents().subscribe(data => {
      this.events = data;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  navigate(id: any) {
    this._router.navigate(['/cursos', id]);
  }
}
