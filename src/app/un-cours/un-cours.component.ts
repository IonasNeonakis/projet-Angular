import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {CoursService} from '../cours.service';

@Component({
  selector: 'app-un-cours',
  templateUrl: './un-cours.component.html',
  styleUrls: ['./un-cours.component.css']
})
export class UnCoursComponent implements OnInit {
  lecours = {id : 0, _nom : '', _description : '' , semestre : {id : 0, _nom__formation : '', _numero__semestre : 1 , _cours : []}};

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private router: Router,
              private coursService: CoursService){
  }

  ngOnInit(): void {
    this.loadLeCours();
  }

  loadLeCours() {
    let id = 0  ;
    this.route.paramMap.subscribe(params => {
      id = Number(params.get('id'));
    });
    this.coursService.getUnCours(id).subscribe(data => {
      // @ts-ignore
      this.lecours = data;
    });
  }

   supprimer() {
    this.coursService.deleteUnCours(this.lecours.id).subscribe( () => {
      this.router.navigate(['/cours']);
    });
  }

}
