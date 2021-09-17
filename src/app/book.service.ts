import { HttpHeaderResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book';

@Injectable()
export class BookService {
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  options = new HttpHeaderResponse({ headers: this.headers });

  url = '/api/books';

  constructor(private http: HttpClient) {}

  getBooksFromStore(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url);
  }
  getBooksFromStores(id: number): Observable<Book> {
    return this.http.get<Book>(this.url + '/' + id);
    // addLeads(leads: Leads): Observable<Leads> {
    //   //console.log("in serveice", leads);
    //   return this.http.post<Leads>(this.url + '/create', leads, this.options);
    // }

}
}
