import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription,take,interval,toArray,from, of  } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {
sourceSub:Subscription;
users:[
{name:'Udya', skill:'Angular'},
{name:'Patel', skill:'Angular'},
{name:'Vaishnavi', skill:'Angular'},
{name:'Patel', skill:'Angular'}
];
  constructor(private router:Router) { }

  ngOnInit() {

    //Example   -  1

    const source = interval(1000);
    this.sourceSub = source.pipe(
      take(5), toArray() ).subscribe(res =>{
       // console.log(res);
      });

      //Example   -  2
      // const source2 = from(this.users);
      //  source2.pipe(toArray()).subscribe(res=>{
      //   console.log(res);
      // });

         //Example   -  3
         const source3 = of('Udya','Vaishnavi','Bulbul','Charu');
         source3.pipe(toArray()).subscribe(res=>{
          console.log(res);
        });

  }
  goBack(){
    this.router.navigate(['rxjs-lib']);
    }
}