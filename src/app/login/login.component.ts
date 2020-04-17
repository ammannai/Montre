import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm : FormGroup ;
username : String ;
password : String ; 
  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm= this.formBuilder.group({
      username : ["",Validators.required],
      password : ["",[Validators.required,Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]]
    }

    )
  }
  connetctUser(username : String , password: String){
    if (username == "admin" && password =="Admin123&&"){
      console.log("Admin connected succefully ");
     
    }
  }

}
