import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent},
      { path: 'services', component: ServicesComponent},
      { path: 'cursos/:id', component: CourseDetailComponent},
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
