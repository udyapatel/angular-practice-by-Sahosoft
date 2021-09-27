import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
  promiseVal;
  constructor() { }

DellAvailable(){
    return false;
}
HpAvailable(){
    return false;
}


  ngOnInit() {

    let buyLaptop= new Promise((resolve,reject) =>{
    //resolve('Promise is resolved')
    //reject('Promise is reject')
    if(this.DellAvailable()){
      return setTimeout(() =>{
        resolve('Dell is Purchased');
      },3000)
   
    }
    else if(this.HpAvailable()){
      return setTimeout(() =>{
        resolve('Hp is Purchased');
      },3000)
     
    }
    else{
      return setTimeout(() =>{
        reject('Laptop is not available in store');
      },3000)
    }
    });
    buyLaptop.then(res => {
      console.log('then code executed => ' , res);
      this.promiseVal =res ;
    } ).catch(res =>{
      console.log('catch code executed =>' , res);
      this.promiseVal =res ;
    })

  }

}
