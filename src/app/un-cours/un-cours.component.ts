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
  lecours;

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private router: Router,
              private coursService: CoursService){
  }

  ngOnInit(): void {
    let id = 0  ;
    this.route.paramMap.subscribe(params => {
      id = Number(params.get('id'));
    });
    this.loadLeCours(id);
  }

  loadLeCours(id) {
    this.coursService.getUnCours(id).subscribe(data => {
      this.lecours = data;
    });
  }

  supprimer() {
    this.coursService.deleteUnCours(this.lecours.id).subscribe(() => {
      console.log('deleted');
    });
    this.router.navigate(['/cours']);
  }
}
