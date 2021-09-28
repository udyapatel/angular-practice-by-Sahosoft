import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
  promiseVal: any;
  dell = {
    brand: 'Dell',
    hardDisk: '1 TB',
    color: 'Black'
  }
  hp = {
    brand: 'HP',
    hardDisk: '2 TB',
    color: 'Silver'
  }
  notAvil = {
    brand: 'Not Available',
    status: 'Failed'
  }


  constructor() { }

  DellAvailable() {
    return false;
  }
  HpAvailable() {
    return false;
  }


  ngOnInit() {

    let buyLaptop = new Promise((resolve, reject) => {
      //resolve('Promise is resolved')
      //reject('Promise is reject')
      if (this.DellAvailable()) {
        return setTimeout(() => {
          resolve(this.dell);
        }, 3000)

      }
      else if (this.HpAvailable()) {
        return setTimeout(() => {
          resolve(this.hp);
        }, 3000)

      }
      else {
        return setTimeout(() => {
          reject(this.notAvil);
        }, 3000)
      }
    });
    buyLaptop.then(res => {
      console.log('then code executed => ', res);
      this.promiseVal = res;
    }).catch(res => {
      console.log('catch code executed =>', res);
      this.promiseVal = res;
    })

  }

}
