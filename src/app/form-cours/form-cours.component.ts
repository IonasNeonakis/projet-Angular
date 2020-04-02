import { Component, OnInit } from '@angular/core';
import {CoursService} from '../cours.service';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-form-cours',
  templateUrl: './form-cours.component.html',
  styleUrls: ['./form-cours.component.css']
})
export class FormCoursComponent implements OnInit {
  cour = {id: 0, _nom: '', _description: '', semestre: null, estnouveau: true} ;
  formulaire;
  tousLesSemestres ;

  private getIndexSemestre(id) {
    for (let i = 0 ; i < this.tousLesSemestres.length ; i++ ) {
      console.log('compteur de i ' + i);
      if (this.tousLesSemestres[i].id === id) {
        return i;
      }
    }
    return 0;
  }

  constructor(private coursService: CoursService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
    this.formulaire = this.formBuilder.group({
      nom: '',
      description: '',
      semestre: null,
      estnouveau: true,
      id : 0
    });
    this.loadLeCours();

  }

  loadLeCours() {
    this.coursService.getTousLesSemestres().subscribe( semestres => {
      this.tousLesSemestres = semestres;


      let id = -1;
      this.route.paramMap.subscribe(params => {
        id = Number(params.get('id'));
      });
      if (id !== 0) {
      this.coursService.getUnCours(id).subscribe(cour => {
        // @ts-ignore
        this.cour = cour;
        this.cour.estnouveau = false;
        this.formulaire.controls.nom.setValue(this.cour._nom);
        this.formulaire.controls.description.setValue(this.cour._description);
        this.formulaire.controls.semestre.setValue(this.tousLesSemestres[this.getIndexSemestre(this.cour.semestre.id)]);
        this.formulaire.controls.estnouveau.setValue(false);
        this.formulaire.controls.id.setValue(this.cour.id);


      });
    }
    });

  }


  ngOnInit(): void {}

  onSubmit(donneesCours) {
    console.log(donneesCours);
    this.coursService.postCours(donneesCours).subscribe( () => {
      this.router.navigate(['/cours']);
    }
  );
  }
}
