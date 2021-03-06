import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { EventsService } from './events/events.service';
import { NoticiasService } from './events/noticias.service';
import { SponsorsService } from './events/sponsors.service';
import { SeoService } from './seo.service';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule
    ],
    exports: [],
    providers: [EventsService,
            NoticiasService,
            SponsorsService,
            SeoService],
})
export class ServicesModule {}
