import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-no',
  templateUrl: './contact-no.component.html',
  styleUrls: ['./contact-no.component.css']
})
export class ContactNoComponent implements OnInit {
formGroup:FormGroup;
contactForm:any;


  constructor() { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      contactNos: new FormArray([
        new FormControl ('7911128118'),
        new FormControl('7280964404')
      ]),
    });
  }
  addContactNo(){
    this.contactForm.get('contactNos').push (new FormControl());
  }
  onSubmit(){
    console.log(this.contactForm.get('contactNos').value);
    console.log(this.contactForm.value);
  }
  setPreset(){
    this.contactForm.get('contactNos').patchValue(['9023606571','9034606581']);
  }

}