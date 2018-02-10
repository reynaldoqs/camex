import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SponsorsService {
  constructor(private _db: AngularFirestore) { }
  getSponsors(): Observable<any> {
   return this._db.collection('sponsors').valueChanges();
  }
}
