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


@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule,FormsModule,ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent ,CustomPipe,
    StudentComponent,StudentDetailsComponent,SignUpComponent,HomeComponent,NavbarComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
