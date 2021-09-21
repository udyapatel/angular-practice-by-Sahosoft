import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot ,CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';
import { StudentComponent } from './student/student.component';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<StudentComponent> {

  canDeactivate():boolean{
return window.confirm('Are you sure to leave the page ?');

  }
}
