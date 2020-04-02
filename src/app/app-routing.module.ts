import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {EnseignementsComponent} from './enseignements/enseignements.component';
import {CoursComponent} from './cours/cours.component';
import {UnCoursComponent} from './un-cours/un-cours.component';
import {FormCoursComponent} from './form-cours/form-cours.component';


const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path : 'enseignats', component: EnseignementsComponent},
  {path : 'cours', component: CoursComponent},
  {path : 'cours/:id/modifier' , component: FormCoursComponent},
  {path : 'cours/creer' , component: FormCoursComponent},
  {path : 'cours/:id', component: UnCoursComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
