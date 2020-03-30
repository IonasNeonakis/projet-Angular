import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {
  cours;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.chargerCours();
    console.log(this.cours);
  }

  chargerCours(){
    this.http.get('https://127.0.0.1:8000/API/cours').subscribe(data => {
      return this.cours = data;
    });
  }
}
