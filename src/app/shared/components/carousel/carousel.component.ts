import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'camex-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  configuration: any = {
    items: 1,
    dots: false,
    margin: 0,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 700
  };
  items: any = [
    {indes: 0, title: 'Aprende a utilizar excel para finanzas', information: 'Anscribite con un descuento del mas del 20%', link: '#'},
    {indes: 1, title: 'Oprende a utilizar excel para finanzas', information: 'Bnscribite con un descuento del mas del 20%', link: '#'},
    {indes: 2, title: 'Eprende a utilizar excel para finanzas', information: 'Cnscribite con un descuento del mas del 20%', link: '#'},
    {indes: 2, title: 'Aprende a utilizar excel para finanzas', information: 'Dnscribite con un descuento del mas del 20%', link: '#'},
    {indes: 2, title: 'Oprende a utilizar excel para finanzas', information: 'Enscribite con un descuento del mas del 20%', link: '#'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
