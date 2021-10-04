import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from, of } from 'rxjs';
import { DesignUtilityService } from '../app-service/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {
obsMsg:any;
  constructor(private router:Router, private _designUtilityService:DesignUtilityService) { }

  ngOnInit() {
    const obs1 = of('Udya Patel' ,'Vaishnavi Patel' , 'Avani Deo') ;

    obs1.subscribe(res =>{
      console.log(res);
      this._designUtilityService.print(res ,'elContainer');
    });

    const obs2 = of({a:'Udya Patel' ,b: 'Vaishnavi Patel' , c:'Avani Deo'}) ;

    obs2.subscribe(res =>{
      this.obsMsg = res;
      console.log('ObsMsg => ',res);
     // this._designUtilityService.print(res ,'elContainer');
    });



    //using from() operator with array

    const obs3 = from(['Paul' , 'Alex', 'John']);
    obs3.subscribe(res =>{
      console.log(res);
      this._designUtilityService.print(res ,'elContainer3');
    });;
 //using  Promise

 const promise = new Promise


  }

   


  goBack(){
    this.router.navigate(['rxjs-lib']);
    }

}