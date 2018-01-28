import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventsService } from '../../../services/events/events.service';

@Component({
  selector: 'camex-events-bar',
  templateUrl: './events-bar.component.html',
  styleUrls: ['./events-bar.component.css']
})
export class EventsBarComponent implements OnInit {
//@ViewChild('owl')owl: OwlCarousel;
configuration: any = {
  margin: 15,
  loop: false,
  autoWidth: true,
  dots: false,
  lazyContent: true
};
courses: any;
//courses: Observable<any[]>;
todo;
vision: boolean;
constructor(public dialog: MatDialog, private _events: EventsService) {}
next() {
 // this.owl.next([500]);
}
ngOnInit() {
 // this.courses = this._events.getEvents();

    this._events.getEvents().subscribe(
      data => {
      console.log(data);
      this.courses = data;
      this.vision = true;
    },
        error => console.log(error),
        () => console.log('completed')
    );
}


}
