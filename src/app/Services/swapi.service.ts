import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SWapiService {
  // tslint:disable-next-line:variable-name
  private planets_url = 'https://swapi.co/api/planets/';
  constructor(private http: HttpClient) { }

  getPlanets() {
    const promise = new Promise((resolve) => {
      this.http.get(this.planets_url).subscribe(
        (data) => {
          resolve(data);
        }
      );
    });
    return promise;
  }
  getPlanetsByPage(pageNo) {
    const promise = new Promise((resolve) => {
      this.http.get(this.planets_url + '?page=' + pageNo).subscribe(
        (data) => {
          resolve(data);
        }
      );
    });
    return promise;
  }
}
