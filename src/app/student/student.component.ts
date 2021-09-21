import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  data="Hello";
  constructor(private el:ElementRef,private renderer:Renderer2) { }

  ngOnInit() {
  }

  @HostListener('click') onClick(){
    alert("Button Clicked");
  }
  @HostListener('mouseover') onMouseHover(){
    this.changeBgColor('red');
   
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.changeBgColor('blue');
   
  }
  changeBgColor(color:string){
this.renderer.setStyle(this.el.nativeElement,'color',color);
  }
}