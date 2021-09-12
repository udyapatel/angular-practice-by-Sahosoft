import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  myForm:FormGroup;
  FirstName:string = "";
  LastName:string = "";
  Email:string = "";
  Password:string = "";


  constructor(private formbuilder:FormBuilder) { 

    this.myForm=formbuilder.group({
      fname: new FormControl('',[Validators.required]),
      lname: new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required , Validators.email]),
     password:new FormControl('',[Validators.required] )

    });
   
  }

  ngOnInit() {
  }
  register(myForm){
    this.FirstName= this.myForm.get('fname').value;
    this.LastName= this.myForm.get('lname').value;
    this.Email= this.myForm.get('email').value;
    this.Password= this.myForm.get('password').value
    console.log(this.myForm.value);
  }

}