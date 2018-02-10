import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { SeoService } from '../services/seo.service';


@Component({
  selector: 'camex-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit, OnDestroy {
  routerSubscription: Subscription;
  constructor(private _router: Router, private seoService: SeoService) {
    seoService.addSeoData();
  }
  ngOnInit() {
  this._router.events.filter((event: any) => event instanceof NavigationEnd).subscribe(() => {
    const contentContainer = document.querySelector('.mat-sidenav-content') || window;
    contentContainer.scrollTo(0, 0);
    });
  }
  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
