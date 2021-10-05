import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
sub1:Subscription;
  constructor() { }

  ngOnInit() {

    const broadCastVideos = interval(1000);
    this.sub1 = broadCastVideos.subscribe(res =>{
      console.log(res);

    });
    setTimeout(() => {
      this.sub1.unsubscribe();
    },6000)

  }

}