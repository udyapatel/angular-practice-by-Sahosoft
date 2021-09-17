import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentComponent } from './student/student.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CustomPipe } from './custom.pipe';
import { AppRoutingModule } from './app-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactNoComponent } from './contact-no/contact-no.component';
import { BookService } from './book.service';
import { BookComponent } from './book/book.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AddBookComponent } from './add-book/add-book.component';




@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule,FormsModule,ReactiveFormsModule, HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    ],


   declarations: [ AppComponent, HelloComponent ,CustomPipe,
    StudentComponent,StudentDetailsComponent,SignUpComponent,HomeComponent,NavbarComponent,
    ContactNoComponent,BookComponent,AddBookComponent
  ],
  bootstrap:    [ AppComponent ],
  providers:[BookService,]
})
export class AppModule { }
