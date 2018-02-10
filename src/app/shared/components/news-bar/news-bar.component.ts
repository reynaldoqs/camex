import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { NoticiasService } from '../../../services/events/noticias.service';
import { OwlCarousel } from 'ngx-owl-carousel';

@Component({
  selector: 'camex-news-bar',
  templateUrl: './news-bar.component.html',
  styleUrls: ['./news-bar.component.css']
})
export class NewsBarComponent implements OnInit, OnDestroy {
  @ViewChild('owl')owl: OwlCarousel;
  configuration: any = {
    dots: false,
    navigation: false,
    margin: 15,
    loop: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 4,
        loop: false
      }
    }
  };
  subscription: Subscription;
  news: Observable<any>;
  vision: boolean;
  constructor(private _noticias: NoticiasService) { }

  ngOnInit() {
    this.subscription = this._noticias.getNoticias().subscribe( data => {
      this.news = data;
      this.vision = true;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  next() {
    this.owl.next();
  }
  prev() {
    this.owl.previous();
  }
}
