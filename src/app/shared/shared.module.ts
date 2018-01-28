import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from '../angular.material.module';
import { OwlModule } from 'ngx-owl-carousel';

import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { LastEventsComponent } from './components/last-events/last-events.component';
import { CamexServicesComponent  } from './components/camex-services/services.component';
import { GuiaComponent } from './components/guia/guia.component';
import { CoursesBarComponent } from './components/courses-bar/courses-bar.component';
import { CourseCardComponent } from './components/courses-bar/course-card/course-card.component';
import { EventsBarComponent } from './components/events-bar/events-bar.component';
import { EventCardComponent } from './components/events-bar/event-card/event-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsBarComponent } from './components/news-bar/news-bar.component';
import { NewsCardComponent } from './components/news-bar/news-card/news-card.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { DialogComponent } from './components/dialog/dialog.component';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    AngularMaterialModule,
    OwlModule
  ],
  declarations: [
    ToolBarComponent,
    NavBarComponent,
    CarouselComponent,
    LastEventsComponent,
    CamexServicesComponent,
    GuiaComponent,
    CoursesBarComponent,
    CourseCardComponent,
    EventsBarComponent,
    EventCardComponent,
    FooterComponent,
    NewsBarComponent,
    NewsCardComponent,
    SponsorsComponent,
    DialogComponent
  ],
  exports: [
    ToolBarComponent,
    NavBarComponent,
    CarouselComponent,
    LastEventsComponent,
    CamexServicesComponent,
    GuiaComponent,
    CoursesBarComponent,
    EventsBarComponent,
    FooterComponent,
    SponsorsComponent,
    NewsBarComponent
  ],
  entryComponents: [
    DialogComponent
  ]
})
export class SharedModule { }
