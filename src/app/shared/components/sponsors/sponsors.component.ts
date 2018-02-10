import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { SponsorsService } from '../../../services/events/sponsors.service';

@Component({
  selector: 'camex-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit, OnDestroy {

  configuration: any = {
    dots: false,
    navigation: false,
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 500,
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
        items: 3,
        loop: false
      }
    }
  };
  subscription: Subscription;
  sponsors: Observable<any>;
  vision: boolean;
  constructor(private _sponsors: SponsorsService) { }

  ngOnInit() {
    this.subscription = this._sponsors.getSponsors().subscribe( data => {
      this.sponsors = data;
      this.vision = true;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
