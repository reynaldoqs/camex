import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { EventsService } from '../../services/events/events.service';

import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'camex-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit, OnDestroy {

  reserva: Reserva = {
    nombre: '',
    telefono: '',
    correo: ''
  };
  course: Observable<any>;
  $id: any;
  subcription: Subscription;
  nameFormControl = new FormControl('', Validators.required);
  phoneFormControl = new FormControl('', [Validators.max(999999999), Validators.min(1111111), Validators.required]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(private _route: ActivatedRoute, private _events: EventsService ) { }

  ngOnInit() {
    this.subcription = this._route.params.subscribe( params => {
     this.course = this._events.getCourse(params['id']);
    } );

  }
  ngOnDestroy() {
    this.subcription.unsubscribe();
  }
  registrar() {
    this._events.addReserva(this.reserva);
  }

}

export interface Reserva {
  nombre: string;
  telefono: string;
  correo: string;
}
