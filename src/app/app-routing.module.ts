import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {EnseignementsComponent} from './enseignements/enseignements.component';


const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path : 'enseignats', component: EnseignementsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
