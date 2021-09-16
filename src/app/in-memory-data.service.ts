import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb() {
    const books = [
      { id: 11, name: 'Lost Archive' ,category:'Novel'},
      { id: 12, name: 'Narco' ,category:'Novel'},
      { id: 13, name: 'Bombasto',category:'Novel' },
      { id: 14, name: 'Celeritas' ,category:'Novel'},
      { id: 15, name: 'Magneta' ,category:'Novel' },
      { id: 16, name: 'RubberMan' ,category:'Novel'},
      { id: 17, name: 'Dynama' ,category:'Novel'},
      { id: 18, name: 'Dr IQ' ,category:'Novel'},
      { id: 19, name: 'Magma' ,category:'Novel'},
      { id: 20, name: 'Tornado' ,category:'Novel'}
    ];
    return {books};
  }

}