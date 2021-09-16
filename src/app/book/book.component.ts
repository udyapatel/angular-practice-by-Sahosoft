import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
softBooks:Observable<Book[]>;
// softBook:Book[];
  constructor(private bookService:BookService) { }

  ngOnInit() {

    this.getSoftBooks();
  }
  // getSoftBooks(){
  //   this.bookService.getBooksFromStore().
  //   subscribe(books => this.softBook=books
  //     );
  // }

  getSoftBooks(){
    this.softBooks= this.bookService.getBooksFromStore();
  }
}