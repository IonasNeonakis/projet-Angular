import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  images = {hits: null};
  motcle = 'paris';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    console.log('init erst appellé');
    this.chercherImages();
  }

  chercherImages() {
    this.http.get('https://pixabay.com/api/?key=15769505-5e65b58a472d4da05f1001de3&q=' + this.motcle +
      ' &image_type=photo').subscribe(data => {
        // @ts-ignore
        this.images = data;
      }
    );
  }
}
