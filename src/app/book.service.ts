import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book';

@Injectable()
export class BookService {


  bookUrl="/api/books";

  constructor(private http:HttpClient) { }

  getBooksFromStore():Observable<Book[]>{
    return this.http.get<Book[]>(this.bookUrl);
  }
  getBooksFromStores(id:number):Observable<Book>{
    return this.http.get<Book>(this.bookUrl +'/' +id);
  }
}