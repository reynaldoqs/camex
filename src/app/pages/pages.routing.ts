import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { GuiaEmpresarialComponent } from './guia-empresarial/guia-empresarial.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { CronogramaComponent } from './cronograma/cronograma.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'home', component: HomeComponent,
        data: {
          title: 'Cámara de exportadores',
          metatags: {
            description:
            `Ofrece servicios de atención y asesoramiento a Empresas del Sector Exportador, organiza Ruedas de Negocios, Misiones a
            la Inversa, capacitaciones, trabaja en Programas de Comercialización de Productos al Exterior con diferentes Sectores
            y Empresas.`,
            keywords: 'Exportación, Cursos, Capacitación, camex, by'
          }
        }
      },
      {
        path: 'about', component: AboutComponent,
        data: {
          title: 'Acerca de nosotros',
          metatags: {
            description: `La Cámara de Exportadores - CAMEX es una entidad privada de carácter gremial que representa a los exportadores`,
            keywords: 'Acerca de camex, misión camex, visión camex'
          }
        }
      },
      {
        path: 'services', component: ServicesComponent,
        data: {
          title: 'Servicios',
          metatags: {
            description:
            `CAMEX cuenta con un Centro Publico integral de servicios especializados y orientados al crecimiento y diversificación de
            sus actividades empresariales y Gestión de exportación Asesoramiento Empresarial, Asesoramiento en logística
            y Procedimientos de exportación orientado al sector`,
            keywords: 'Asesoramiento, Capacitación, Desarrollo empresarial'
          }
        }
      },
      { path: 'guia-empresarial', component: GuiaEmpresarialComponent },
      { path: 'noticias', component: NoticiasComponent },
      { path: 'cronograma', component: CronogramaComponent },
      { path: 'cursos/:id', component: CourseDetailComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
