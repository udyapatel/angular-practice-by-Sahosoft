import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
bookToUpdate:string;
bookForm: FormGroup;
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
    this.route.params.subscribe(param => {
      console.log(param)
      if(param && param.id){
        let book = this.bookService.getBookById(param.id);
        if(book){
          this.bookForm.setValue(book);
         
          }
        else this.router.navigate(['/book-list'])
      }
    })
    // this.getBookUpdateById(this.bookId);
  }

// getBookUpdateById(bookId:string){
// this.bookService.getBookById(bookId).subscribe(
// book => { 
// this.bookToUpdate = bookId;
// console.log(this.bookToUpdate);
// this.bookForm.controls['name'].setValue(book.name),
// this.bookForm.controls['category'].setValue(book.category),
// this.bookForm.controls['author'].setValue(book.author)

// });
// }
updateBook(book: Book) {
  this.bookService.updateBook(book).subscribe((book) => {
    this.getAllBooks();
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
  
