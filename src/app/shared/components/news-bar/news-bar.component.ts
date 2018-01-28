import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'camex-news-bar',
  templateUrl: './news-bar.component.html',
  styleUrls: ['./news-bar.component.css']
})
export class NewsBarComponent implements OnInit {
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
  classOne = {
    color: 'red',
    'background-color': 'orange',
    display: 'inline-flex'
  };
  events: any = [
    {
      key: '01',
      title: 'Ecuentro de profesores',
      description: 'Este encuentro se realizara el dia lunes en aqui',
      imgUrl:
        'https://api.adorable.io/avatar/190/ev01'
    },
    {
      key: '01',
      title: 'Ecuentro de profesores',
      description: 'Este encuentro se realizara el dia lunes en aqui',
      imgUrl:
        'https://api.adorable.io/avatar/190/ev02'
    },
    {
      key: '01',
      title: 'Ecuentro de profesores',
      description: 'Este encuentro se realizara el dia lunes en aqui',
      imgUrl:
        'https://api.adorable.io/avatar/190/ev03'
    },
    {
      key: '01',
      title: 'Ecuentro de profesores',
      description:
        'Este encuentro se realizara el dia lunes en aqui y nose que vamos a hacer',
      imgUrl:
        'https://api.adorable.io/avatar/190/ev04'
    },
    {
      key: '01',
      title: 'Ecuentro de profesores',
      description:
        'Este encuentro se realizara el dia lunes en aqui y muchos de nosotros no sabemos que hacer con uestro tiempo y solo la pasamos diseñando webs y que mas podemos hacer si no tenemos recursos',
      imgUrl:
        'https://api.adorable.io/avatar/190/ev05'
    },
    {
      key: '01',
      title: 'Ecuentro de profesores',
      description: 'Este encuentro se realizara el dia lunes en aqui',
      imgUrl:
        'https://api.adorable.io/avatar/190/ev06'
    },
    {
      key: '01',
      title:
        'Ecuentro de profesores que nos que vamos a hacer perl o msnoa a hacer',
      description: 'Este encuentro se realizara el dia lunes en aqui',
      imgUrl:
        'https://api.adorable.io/avatar/190/ev07'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
