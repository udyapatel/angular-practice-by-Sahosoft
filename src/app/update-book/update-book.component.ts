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
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
bookToUpdate:string;
bookForm: FormGroup;
  constructor( private router: Router,
    private formbuilder: FormBuilder,
    private bookService: BookService) { }

  ngOnInit() {
    this.bookForm = this.formbuilder.group({
      name: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      author:new FormControl('', [Validators.required]),
    });
  }

getBookUpdateById(bookId:string){
this.bookService.getBookById(bookId).subscribe(
book => { 
this.bookToUpdate = bookId
this.bookForm.controls['name'].setValue(book.name),
this.bookForm.controls['category'].setValue(book.category),
this.bookForm.controls['author'].setValue(book.author)

});
}
}
  
