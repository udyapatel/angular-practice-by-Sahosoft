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
dataSaved: boolean;
books:Book;
bookForm: FormGroup;
allBooks: Observable<Book[]>;
  constructor( private router: Router,
    private formbuilder: FormBuilder,
    private bookService: BookService,
    private route: ActivatedRoute,) { }

  ngOnInit() {
    this.bookForm = this.formbuilder.group({
    id: new FormControl({value: '', disabled: true}),
      name: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      author:new FormControl('', [Validators.required]),
    });



this.route.paramMap.subscribe(
  params=>{
    const bookIds= +params.get('id');
    if(bookIds){
      console.log('jhsdhddbd',bookIds);
      this.getBookId(bookIds)
    
    }
  }
)
  }

getBookId(id:number){
this.bookService.getBookById(id).subscribe(res =>
  {
    this.books=res;
    console.log("gjhdgsdhgshgfhgfdjgfdhgj",res);
    this.updateBook(this.books);
});
}

updateBook(book: Book) {
this.bookForm.patchValue({
'id':book.id,
'name':book.name,
'category':book.category,
'author':book.author
  })
 

}

onFormSubmit() {
  let bookForUpdate:Book = this.bookForm.value;
  bookForUpdate.id=this.books.id;
  console.log('book for update',bookForUpdate.id);
  this.bookService.updateBook(bookForUpdate).subscribe(book => {
    this.dataSaved = true;
    this.getAllBooks();
    console.log(this.dataSaved);
    
  });
this.router.navigate(['book-list']);
}


getAllBooks() {
  this.allBooks = this.bookService.getBooksFromStore();
}


}
  
