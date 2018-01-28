import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesModule } from './services/services.module';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing';

import { PagesModule } from './pages/pages.module';
import { Page404Component } from './page404/page404.component';
import { LoginComponent } from './login/login.component';

//solo para probar


@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
