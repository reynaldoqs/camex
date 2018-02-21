import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'camex-guia',
  template: `
    <h3>Guia Empresarial</h3>
    <p>
    El papel de la CAMEX en el ámbito exportador es vital y de gran importancia pues es la entidad que cuida y vela por los intereses de los exportadores.
    </p>
    <button class="my-button" mat-raised-button (click)="navigate()" color="primary">Consultar guia empresarial</button>
  `,
  styleUrls: ['./guia.component.css']
})
export class GuiaComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  navigate() {
    this._router.navigate(['/guia-empresarial']);
  }
}
