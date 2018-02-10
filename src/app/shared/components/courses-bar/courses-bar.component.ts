import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventsService } from '../../../services/events/events.service';
import { OwlCarousel } from 'ngx-owl-carousel';
import { DialogComponent } from '../dialog/dialog.component';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'camex-courses-bar',
  templateUrl: './courses-bar.component.html',
  styleUrls: ['./courses-bar.component.css']
})
export class CoursesBarComponent implements OnInit, OnDestroy {
  @ViewChild('owl')owl: OwlCarousel;
  configuration: any = {
    margin: 15,
    loop: false,
    autoWidth: true,
    dots: false,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    fluidSpeed: true
  };
  subscription: Subscription;
  courses: Observable<any>;
  vision: boolean;
  constructor(public dialog: MatDialog, private _events: EventsService) {}
  next() {
    this.owl.next();
  }
  prev() {
    this.owl.previous();
  }
  ngOnInit() {
    this.subscription = this._events.getEvents().subscribe(
      data => {
        this.courses = data;
        this.vision = true;
      },
      error => console.log(error),
      () => console.log('completed')
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  openDialog(course): void {
    this.dialog.open(DialogComponent, {
      data: course
    });
  }
}
