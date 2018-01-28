import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'camex-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit, OnDestroy {
  $id: any;
  sub: any;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this._route.params.subscribe( params => console.log(params) );
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
