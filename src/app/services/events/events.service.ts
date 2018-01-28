import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EventsService {
  constructor(private _db: AngularFirestore) { }

  getEvents(): Observable<any> {
    return this._db.collection('eventos').snapshotChanges()
    .map(actions => {
      return actions.map( a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    });
  }
  getLastEvents(): Observable<any> {
    return this._db.collection('eventos', ref => ref.orderBy('fecha_inicio').limit(2)).valueChanges();
  }
}
