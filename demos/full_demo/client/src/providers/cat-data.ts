import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FilmData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CatData {

  constructor(public http: Http) {
  }

  getCats() {
    return this.http.get('http://localhost:3000/api/cats')
    .map(res => res.json());
  }

  getCat(id) {
    return this.http.get('http://localhost:3000/api/cats/'+id)
    .map(res => res.json());
  }

}
