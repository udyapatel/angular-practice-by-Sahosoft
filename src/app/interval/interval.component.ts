import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from '../app-service/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

obsMsg:any;
videoSubscription:Subscription;

constructor(private router:Router, private _designUtilityService:DesignUtilityService) { }

  ngOnInit() {

    //const broadCastVideos = interval(1000);

    //timer(delay,interval)
    const broadCastVideos = timer(5000,1000);
    this.videoSubscription = broadCastVideos.subscribe(res => {
      console.log(res);
      this.obsMsg = 'Video ' +res;
      this._designUtilityService.print(this.obsMsg, 'elContainer');
      this._designUtilityService.print(this.obsMsg, 'elContainer2');
      this._designUtilityService.print(this.obsMsg, 'elContainer3');

      if(res >= 5){
        this.videoSubscription.unsubscribe();
      }
    });
  }
  goBack(){
    this.router.navigate(['rxjs-lib']);
    }
}