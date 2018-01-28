import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'camex-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {


  @Input('course')course: any;
  constructor() { }

  ngOnInit() {
  }

}
