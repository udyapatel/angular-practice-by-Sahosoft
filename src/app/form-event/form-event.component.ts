import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from '../app-service/design-utility.service';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.css']
})
export class FormEventComponent implements OnInit, AfterViewInit{
  @ViewChild('addBtn')  addBtn : ElementRef;
  constructor(private printService:DesignUtilityService, private router:Router) { }

  ngOnInit() {


  }
ngAfterViewInit(){
let count = 1;
  fromEvent(this.addBtn.nativeElement , 'click').subscribe(
    res =>{
      let countVal = 'Video  ' +count++
      console.log(countVal);
      this.printService.print(countVal,'elContainer');
      this.printService.print(countVal,'elContainer2');
    }
  )


}

goBack(){
this.router.navigate(['rxjs-lib']);
}

}