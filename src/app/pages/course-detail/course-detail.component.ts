import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { EventsService } from '../../services/events/events.service';

import {FormControl, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SeoService } from '../../services/seo.service';
@Component({
  selector: 'camex-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit, OnDestroy {

  reserva: Reserva = {
    nombre: '',
    telefono: '',
    correo: '',
    institucion: ''
  };
  course: Observable<any>;
  $id: any;
  subcription: Subscription;
  vision: boolean;
  nameFormControl = new FormControl('', Validators.required);
  phoneFormControl = new FormControl('', [Validators.max(999999999), Validators.min(1111111), Validators.required]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  institucionFormControl = new FormControl('');

  constructor(private _route: ActivatedRoute, private _events: EventsService, public snackBar: MatSnackBar, private _meta: SeoService ) { }

  ngOnInit() {
    this._route.params.subscribe( params => {
      this.$id = params['id'];
     this.subcription = this._events.getCourse(this.$id).subscribe(course => {
       this.course = course;
       this.addSeo({
        titulo: course.titulo,
        imagen: course.url,
        descripcion: course.descripcion
       });
       this.vision = true;
     });
    } );

  }
  ngOnDestroy() {
    this.subcription.unsubscribe();
  }
  registrar() {
    this._events.addReserva(this.reserva).catch( (err) => this.openSnackBar(err)).then( () => {
      this.openSnackBar('Reserva guardada');
      this.nameFormControl.reset();
      this.phoneFormControl.reset();
      this.emailFormControl.reset();
      this.institucionFormControl.reset();
    });
  }
  openSnackBar(msg: string)  {
    this.snackBar.open(msg, 'Aceptar', {
      duration: 3000
    });
  }
  addSeo(data: any) {
    this._meta.addSeoDetail(data);
  }
}

export interface Reserva {
  nombre: string;
  telefono: string;
  correo: string;
  institucion: string;
}
