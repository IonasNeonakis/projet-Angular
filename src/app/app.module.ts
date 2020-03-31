import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { EnseignementsComponent } from './enseignements/enseignements.component';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CoursComponent } from './cours/cours.component';
import { UnCoursComponent } from './un-cours/un-cours.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    EnseignementsComponent,
    NavbarComponent,
    CoursComponent,
    UnCoursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
