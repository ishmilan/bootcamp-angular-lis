import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class OwnerService {

  constructor(private http: Http) { }
  getOwners() {
    return this.http.get('http://localhost:9966/petclinic/api/owners/').subscribe(data=>{
      // this.results = data;
      console.log(data);
    });
  }

}
