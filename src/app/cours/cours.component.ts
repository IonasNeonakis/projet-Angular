import { Component, OnInit} from '@angular/core';
import {CoursService} from '../cours.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {
  cours;

  constructor(private coursService: CoursService,
              private router: Router
              ) {
  }

  ngOnInit(): void {
    console.log('init des cours est appellé');
    this.chargerCours();
  }

  chargerCours(){
    console.log('charger cours');
    this.coursService.getLesCours().subscribe(data  => {
        this.cours = data;
    });
  }

  supprimmer(id: number) {
    this.coursService.deleteUnCours(id).subscribe(() => {
      this.chargerCours();
      this.router.navigate(['/cours']);
    });
  }
}
