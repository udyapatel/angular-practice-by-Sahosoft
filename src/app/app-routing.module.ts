import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AdminComponent } from './admin/admin.component';
import { BookComponent } from './book/book.component';
import { CanActivateGuard } from './can-activate.guard';
import { ContactNoComponent } from './contact-no/contact-no.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentComponent } from './student/student.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent , canActivate:[CanActivateGuard] },
  { path: 'student', component: StudentComponent },
  { path: 'student-details', component: StudentDetailsComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'book-list', component: BookComponent },
  { path: 'create-book', component: AddBookComponent },
  { path: 'edit-book/:id', component: UpdateBookComponent },
  // { path: 'book-list/:id', component: BookComponent }, 
  // { path: 'contact-us', component: ContactNoComponent },
  { path: '**',  component: PageNotFoundComponent},
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }