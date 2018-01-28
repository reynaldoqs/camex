import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'camex-servicios',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class CamexServicesComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  navigate(ruta) {
    this._router.navigate([`/${ruta}`]);
  }
}
