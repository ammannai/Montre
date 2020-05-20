import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm : FormGroup ;
model : any={} ;
  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm= this.formBuilder.group({
      email : [""],
      password : [""]
    }

    )
  }
  login(form : any){
    console.log("This is my credentials" , this.model);
    
  }
  connetctUser(username : String , password: String){
    if (username == "admin" && password =="Admin123&&"){
      console.log("Admin connected succefully ");
     
    }
  }

}
