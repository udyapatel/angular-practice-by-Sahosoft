import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable,map } from 'rxjs';
import { Book } from '../../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
softBooks:Observable<Book[]>;
softsBooks:Observable<Book>;
// books=Observable<String>;
 softBook:Book[];

  constructor(private bookService:BookService) { }

  ngOnInit() {
   this.getSoftBooksById();
   this.getSoftBooks();
   this.getAllBooks();
   
  }
  getAllBooks(){
    this.bookService.getBooksFromStore().
    subscribe(books => this.softBook=books
      );
  }
//by using Async pipe
  getSoftBooks(){
    this.softBooks= this.bookService.getBooksFromStore();
  }
  getSoftBooksById(){
    this.softsBooks= this.bookService.getBooksFromStores(11);
  }
 
  // getBooksById(){
  //   this.books= this.bookService.getBooksFromStores(11).map(book=> book.name);
  // }
}