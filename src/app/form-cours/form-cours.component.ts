import { Component, OnInit } from '@angular/core';
import {CoursService} from '../cours.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-form-cours',
  templateUrl: './form-cours.component.html',
  styleUrls: ['./form-cours.component.css']
})
export class FormCoursComponent implements OnInit {
  cour;
  formulaire;

  constructor(private coursService: CoursService,
              private formBuilder: FormBuilder) {
    this.formulaire = this.formBuilder.group({
      nom : '',
      description : ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(donneesCours) {
    console.log(donneesCours);
  }
}
