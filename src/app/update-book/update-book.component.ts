import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import { filter, shareReplay, switchMap } from 'rxjs/operators';
import { Book } from '../../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

bookToUpdate:any;
books:Book;
bookForm: FormGroup;
books$: Observable<Book>;
allBooks: Observable<Book[]>;
  constructor( private router: Router,
    private formbuilder: FormBuilder,
    private bookService: BookService,
    private route: ActivatedRoute,) { }

  ngOnInit() {
    this.bookForm = this.formbuilder.group({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      author:new FormControl('', [Validators.required]),
    });


    this.books$ = this.route.queryParams.pipe(filter(params => params && params.id),
     switchMap(params => this.bookService.getBookById(params.id)), shareReplay(3));

     this.books$.subscribe(response =>{
this.books= response;
console.log('Response',this.book);
this.setValue(this.books);

     })






   
  }



setValue(x:Book){
  this.bookForm.setValue({
    'id':x.id,
    'name':x.name,
    'category':x.category,
    'author':x.author
  });

}
updateBook(book: Book) {
  book.id= this.bookToUpdate;
  this.bookService.updateBook(this.bookForm.value).subscribe(book => {
    this.getAllBooks();
    console.log(this.updateBook);
    this.bookToUpdate=null;
  });
   this.router.navigate(['book-list']);
}

onFormSubmit() {
  let book = this.bookForm.value;
  this.updateBook(book);
  this.bookForm.reset;;
console.log(this.bookForm.value);
}
getAllBooks() {
  this.allBooks = this.bookService.getBooksFromStore();
}


}
  
