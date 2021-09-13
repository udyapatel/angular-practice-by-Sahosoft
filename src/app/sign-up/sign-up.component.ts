import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from '../student';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
student:Student=new Student();
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
    // this.myForm.get('fname').valueChanges.subscribe(
    //   uname =>{
    //     console.log('fname changed:' +uname);
    //   }
    // )

 this.myForm.get('email').statusChanges.subscribe(
      status =>{
        console.log('status changed:' +status);
      }
    )

//Value change example
    // this.myForm.valueChanges.subscribe((
    //   uname:Student)=>{Student
    //     console.log('fname changed:' +uname.fname);
    //     console.log('lname changed:' + uname.lname);
    //    console.log('email changed:' + uname.email);
    //     console.log('password changed:' + uname.password);
    //   })
  }


  register(myForm){
    this.FirstName= this.myForm.get('fname').value;
    this.LastName= this.myForm.get('lname').value;
    this.Email= this.myForm.get('email').value;
    this.Password= this.myForm.get('password').value
    console.log(this.myForm.value);
  }
  fillData(){
    // this.myForm.setValue({
      this.myForm.patchValue({
      "fname":"Udya",
      "lname":"Patel",
      // "email":"udya.patel2050@gmail.com",
      "password":"Udya"
    });
  }

}