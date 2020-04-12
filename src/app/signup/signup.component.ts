import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user : User ;
id : number ;
formBuilder : FormBuilder;
userForm : FormGroup ;
  constructor() { }

  ngOnInit() {
    this.user = new User("","","","","","");
    this.userForm = this.formBuilder.group({
      id : [""],
firstName:[""],
lastName:[""],
email:[""],
tel : [""],
password : [""],
confirmPassword : [""]
    }
    )}
saveUser (User : any){
  console.log("User added succefully",this.user);
}
}
