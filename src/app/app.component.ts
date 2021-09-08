import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 dob = new Date(1990,5,4); 
 salary:number= 100000;
 name:string= "udya patel";
 position:string="software developer";
 work:string="software development";
 currentDate= new Date();
 myNum:number = 0.01234676876;
 employees=[
{
'id' : 1,name:'Crystal Dsuza',gender:'female',salary:12300
},
{
  'id' : 2,name:'Cristano Ronalado',gender:'male',salary:194300
},
{
  'id' : 3,name:'Jennifer Winget',gender:'female',salary:15600
},
{
  'id' : 4,name:'Jennifer Lowerence',gender:'female',salary:153600
}
];


}
