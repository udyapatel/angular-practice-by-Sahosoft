import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

obsMsg:any;

constructor(private router:Router) { }

  ngOnInit() {

    const broadCastVideos = interval(3000);
    broadCastVideos.subscribe(res => {
      console.log(res);
      this.obsMsg = 'Video ' +res;
    });
  }
  goBack(){
    this.router.navigate(['rxjs-lib']);
    }
}