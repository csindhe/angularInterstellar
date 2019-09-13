import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  uri = "http://localhost:4000";

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(`${this.uri}/getMovies`);
  }
}
