import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enseignements',
  templateUrl: './enseignements.component.html',
  styleUrls: ['./enseignements.component.css']
})
export class EnseignementsComponent implements OnInit {
  enseignant = {nom: 'ionas',
    adresse: 'ionas.neonakis@gmail.com',
    numero : '0602223277'};

  cours = [];

  cour = {nom: '', semestre: ''};
  newCour = false;
  addCours(){
    if (this.cour.semestre !== '' && this.cour.nom !== '') {
    this.cours.push({
      nom: this.cour.nom,
      semestre: this.cour.semestre
    });
    this.cour.nom = '';
    this.cour.semestre = '';
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
