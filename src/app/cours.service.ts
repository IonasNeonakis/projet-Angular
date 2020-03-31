import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(private http: HttpClient) { }

  getUnCours(id) {
    return this.http.get('https://127.0.0.1:8000/API/cours/' + id);
  }

  getLesCours() {
    return this.http.get('https://127.0.0.1:8000/API/cours');
  }

  deleteUnCours(id){
    return this.http.delete('https://127.0.0.1:8000/API/cours/' + id + '/delete');
  }
}
