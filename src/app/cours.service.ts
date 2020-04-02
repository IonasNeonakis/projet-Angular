import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  // tslint:disable-next-line:variable-name

  constructor(private http: HttpClient) { }

  getUnCours(id) {
    return this.http.get('https://127.0.0.1:8000/api/cours/' + id);
  }

  getLesCours() {
    return this.http.get('https://127.0.0.1:8000/api/cours');
  }

  deleteUnCours(id){
    return this.http.delete('https://127.0.0.1:8000/api/cours/' + id + '/delete');
  }

  getTousLesSemestres() {
    return this.http.get('https://127.0.0.1:8000/api/semestre');
  }

  postCours(cours){
    return this.http.put('https://127.0.0.1:8000/api/cours/creer', cours);
  }

}
