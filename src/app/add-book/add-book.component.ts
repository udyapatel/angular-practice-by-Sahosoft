import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
 
  bookForm: FormGroup;
  dataSaved: boolean;
  allBooks: Observable<Book[]>;

  constructor(
    private router: Router,
    private formbuilder: FormBuilder,
    private bookService: BookService
  ) {}

  onFormSubmit() {
    this.dataSaved = false;
    let book = this.bookForm.value;
    this.createBook(book);
    this.bookForm.reset;
  }
  createBook(book: Book) {
    this.bookService.createBook(book).subscribe((book) => {
      this.dataSaved = true;
      this.getAllBooks();
    });
     this.router.navigate(['book-list']);
  }

  ngOnInit() {
    this.bookForm = this.formbuilder.group({
      name: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      author:new FormControl('', [Validators.required]),
    });
    this.getAllBooks();
  }
  getAllBooks() {
    this.allBooks = this.bookService.getBooksFromStore();
  }
}
