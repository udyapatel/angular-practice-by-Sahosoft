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
  getBooksFromStores(): Observable<Book> {
    return this.http.get<Book>(this.url + '/');
  }


  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.url, book, this.options);
  }

  getBookById(id: any): Observable<Book> {
    return this.http.get<Book>(this.url + "/" + id);
  }
  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(this.url +'/'+book.id, book, this.options);
  }

  deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(this.url + "/" + id)
      
  }
  
   


}
