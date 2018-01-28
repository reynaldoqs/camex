import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'camex-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
  @Input('event')event: any;
  constructor() { }

  ngOnInit() {
  }

}
