import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EventsService {
  today = new Date();
  private itemDoc: AngularFirestoreDocument<any>;
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
   // return this._db.collection('eventos', ref => ref.orderBy('fechas').limit(2)).valueChanges();
   return this._db.collection('eventos', ref => ref.where('ultimo_registro', '>' , this.today).limit(3)).snapshotChanges()
   .map(actions => {
     return actions.map( a => {
       const data = a.payload.doc.data();
       const id = a.payload.doc.id;
       return {id, ...data};
     });
   });
  }
  getCourse(id: string): Observable<any> {
    this.itemDoc = this._db.doc<any>(`eventos/${id}`);
    return this.itemDoc.valueChanges();
  }
  addReserva(item: any) {
    // ver como hacer un push en un elemento de una coleccion
    const itemRservas: any = this.itemDoc.collection('reservas');
    itemRservas.add(item);
  }
}
