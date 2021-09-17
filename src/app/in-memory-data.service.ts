import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb() {
    const books = [
      { id: 11, name: 'Lost Archive' ,category:'Novel',author:'Veleria Luiselli'},
      { id: 12, name: 'Narco' ,category:'Novel',author:'Veleria Luiselli'},
      { id: 13, name: 'Bombasto',category:'Novel' ,author:'Veleria Luiselli'},
      { id: 14, name: 'Celeritas' ,category:'Novel' ,author:'Veleria Luiselli'},
      { id: 15, name: 'Magneta' ,category:'Novel' ,author:'Veleria Luiselli'},
      { id: 16, name: 'RubberMan' ,category:'Novel' ,author:'Veleria Luiselli'} ,
      { id: 17, name: 'Dynama' ,category:'Novel' ,author:'Veleria Luiselli'},
      { id: 18, name: 'Dr IQ' ,category:'Novel',author:'Veleria Luiselli'},
      { id: 19, name: 'Magma' ,category:'Novel' ,author:'Veleria Luiselli'},
      { id: 20, name: 'Tornado' ,category:'Novel',author:'Veleria Luiselli'}
    ];
    return {books};
  }

}