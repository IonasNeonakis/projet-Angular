import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { EnseignementsComponent } from './enseignements/enseignements.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CoursComponent } from './cours/cours.component';
import { UnCoursComponent } from './un-cours/un-cours.component';
import { FormCoursComponent } from './form-cours/form-cours.component';
import { NgxMdModule } from 'ngx-md';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    EnseignementsComponent,
    NavbarComponent,
    CoursComponent,
    UnCoursComponent,
    FormCoursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMdModule.forRoot()
  ],
  providers: [UnCoursComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
