import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from '../app-service/design-utility.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css']
})
export class CustomObservableComponent implements OnInit{
techStatus;
sub2:Subscription;

constructor(private _designUtilityService:DesignUtilityService) { }

  ngOnInit() {

    //Example 1 (Manual)
    const cusObs1 = Observable.create(observer => {
      setTimeout(()=>{
        observer.next('Angular')
      },1000);
      setTimeout(()=>{
        observer.next('CSS3')
      },2000);
      setTimeout(()=>{
        observer.next('Bootstrap')
      },3000);
      setTimeout(()=>{
        observer.next('Java')
      //  observer.error(new Error('Limit Execeeded'));
      },4000);
      setTimeout(()=>{
        observer.next('Jquery')
        observer.complete()
      },4000);

    });
    cusObs1.subscribe(res=>{
      console.log(res);
      this._designUtilityService.print(res,'elContainer');
     (err =>{
      this.techStatus = 'error';
     });
     (()=>{
      this.techStatus = 'completed';
     })

    });

    //Example 2 (Custom Observables)


    // const cusObs2 = Observable.create(observer =>{
    //   let count = 1
    //  setInterval(()=>{
    //  observer.next('Data emit' +count);
    //  count++;

    //  if(count >= 5){
    //    observer.complete();
    //  }
    //  },10000)
    // })
   //this.sub2  = cusObs2.subscribe(res =>{
     // console.log(res);
     // this._designUtilityService.print(res, 'elContainer');
   //})

   }
   //Example 3 (Random Names)
  //  ngOnDestroy(){
  //    this.sub2.unsubscribe();

  //  }

}