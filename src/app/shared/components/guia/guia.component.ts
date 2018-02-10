import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'camex-guia',
  template: `
    <h3>Guia Empresarial</h3>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, animi excepturi at officia nemo nisi quas aut quasi odio.
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
