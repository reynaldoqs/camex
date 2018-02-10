import { Component, OnInit, OnDestroy } from '@angular/core';
import { NoticiasService } from '../../services/events/noticias.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'camex-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  vision: boolean;
  news: Observable<any>;
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
}
