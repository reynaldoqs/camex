import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NoticiasService {
  constructor(private _db: AngularFirestore) { }
  getNoticias(): Observable<any> {
   return this._db.collection('noticias', ref => ref.orderBy('fecha')).valueChanges();
  }
}
