import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventsService } from '../../services/events/events.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'camex-cronograma',
  templateUrl: './cronograma.component.html',
  styleUrls: ['./cronograma.component.css']
})
export class CronogramaComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  events: Observable<any>;
  vision: boolean;
  constructor(private _es: EventsService, private _router: Router) { }

  ngOnInit() {
    this.subscription = this._es.getEvents().subscribe(event => {
      this.events = event;
      this.vision = true;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  navigate(url: any) {
    this._router.navigate([`cursos/${url}`]);
  }
}
