import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AdminComponent } from './admin/admin.component';
import { BookComponent } from './book/book.component';
import { CanActivateGuard } from './can-activate.guard';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { ContactNoComponent } from './contact-no/contact-no.component';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';
import { FormEventComponent } from './form-event/form-event.component';
import { HomeComponent } from './home/home.component';
import { IntervalComponent } from './interval/interval.component';
import { OfFromComponent } from './of-from/of-from.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PromiseComponent } from './promise/promise.component';
import { RxjsLibraryComponent } from './rxjs-library/rxjs-library.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentComponent } from './student/student.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent , canActivate:[CanActivateGuard] },
  { path: 'student', component: StudentComponent, canDeactivate:[CanDeactivateGuard]},
  { path: 'student-details', component: StudentDetailsComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'book-list', component: BookComponent },
  { path: 'create-book', component: AddBookComponent },
  { path: 'edit-book/:id', component: UpdateBookComponent },
  // { path: 'book-list/:id', component: BookComponent }, 
 //{ path: 'contact-us', component: ContactNoComponent },
  { path: 'rxjs-lib', component: RxjsLibraryComponent },
  { path: 'rxjs-lib/promise', component: PromiseComponent },
  { path: 'rxjs-lib/form-event', component: FormEventComponent},
  { path: 'rxjs-lib/interval', component: IntervalComponent},
  { path: 'rxjs-lib/of-from', component: OfFromComponent},
  { path: 'rxjs-lib/to-array', component: ToArrayComponent},
  { path: 'rxjs-lib/custom', component: CustomObservableComponent},

  { path: '**',  component: PageNotFoundComponent},
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }