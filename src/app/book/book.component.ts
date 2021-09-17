import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private bookService:BookService,private router:Router) { }

  ngOnInit() {
   this.getSoftBooksById();
   this.getSoftBooks();
   this.getAllBooks();
   
  }
  addBook(){
    this.router.navigate(['create-book']);
  }
  editBook(){
    this.router.navigate(['edit-book']);
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