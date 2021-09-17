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
  }


  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.url, book, this.options);
  }

  getBookById(bookId: string): Observable<Book> {
    return this.http.get<Book>(this.url + "/" + bookId);
  }
  updateBook(book: Book): Observable<number> {
    return this.http.put<number>(this.url +'/'+book.id, book, this.options);
  }

   
   


}
