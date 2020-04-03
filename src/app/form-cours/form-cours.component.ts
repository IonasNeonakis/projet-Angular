import {Component, NgModule, OnInit} from '@angular/core';
import {CoursService} from '../cours.service';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
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
      nom: new FormControl( '', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', [Validators.required, Validators.minLength(5)]),
      semestre: new FormControl(null, [Validators.required]),
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
        this.formulaire.controls.id.setValue(this.cour.id);
      });
    }
    });

  }


  ngOnInit(): void {}

  onSubmit(donneesCours) {
    if (this.cour.estnouveau){
    this.coursService.postnewCours(donneesCours).subscribe( () => {
      this.router.navigate(['/cours']);
    });
    }else {
      this.coursService.posteditCours(donneesCours, this.cour.id).subscribe(() => {
        this.router.navigate(['/cours']);
      }
    );
    }
  }

  get nom() { return this.formulaire.get('nom'); }

  get description() { return this.formulaire.get('description'); }

  get semestre() { return this.formulaire.get('semestre'); }


}
