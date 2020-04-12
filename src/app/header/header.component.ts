import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
lname : string = "Mannai" ; 
fname : string ="Amine";
fullName : string ; 
age : number = 40 ;
  constructor() { }

  ngOnInit() {
    this.fullName = this.getName(this.lname,this.fname);
   
  }
  getName(a : string,b: string){
   return this.fullName = a+" "+b ;
  }
  getLength(){
    return this.fullName.length;
  }

}
