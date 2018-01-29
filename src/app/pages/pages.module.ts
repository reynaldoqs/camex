import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages.routing';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { AngularMaterialModule } from '../angular.material.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GuiaEmpresarialComponent } from './guia-empresarial/guia-empresarial.component';


@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FlexLayoutModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PagesComponent,
    HomeComponent,
    CoursesComponent,
    CourseDetailComponent,
    ServicesComponent,
    AboutComponent,
    GuiaEmpresarialComponent
  ]
})
export class PagesModule { }
