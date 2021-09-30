import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { DesignUtilityService } from '../app-service/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {

  constructor(private router:Router, private _designUtilityService:DesignUtilityService) { }

  ngOnInit() {
    const obs1 = of('Udya' ,'Vaishnavi' , 'Avani Deo') ;

    obs1.subscribe(res =>{
      console.log(res);
    });
  }

 


  goBack(){
    this.router.navigate(['rxjs-lib']);
    }

}