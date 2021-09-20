import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router,ActivatedRoute, Params } from '@angular/router';
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
books:Book;
 softBook:Book[];

  constructor(private bookService:BookService,private router:Router,private route: ActivatedRoute) { }
 
  ngOnInit() {
  this.getSoftBooksById();
   this.getSoftBooks();
   this.getAllBooks();

   
 
}
  
  addBook(){
    this.router.navigate(['create-book']);
  }
  editBook(id:number){
    this.router.navigate(['edit-book', id]);
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
    this.softsBooks= this.bookService.getBooksFromStores();
  }
  deleteBook(id: number) {
    if (confirm("Delete this Book?")) {
      this.bookService.deleteBook(id).subscribe(res => 
        {this.getBookId(id)});
     
  
    }
  }
  getBookId(id:number){
    this.bookService.getBookById(id).subscribe(res =>
      {
        this.books=res;
        console.log("gjhdgsdhgshgfhgfdjgfdhgj",res);
      
    });
    }

}
