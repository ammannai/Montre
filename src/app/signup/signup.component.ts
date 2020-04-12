import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  user: User;
  id: number;
  userForm: FormGroup;
  constructor(
     private formBuilder: FormBuilder  ) {}

  ngOnInit() {
    this.user = new User("", "", "", "", "", "");
    this.userForm = this.formBuilder.group({
     id: [""],
      firstName: [
        "",
        [Validators.required, Validators.maxLength(8), Validators.minLength(2)],
      ],
       lastName: ["",Validators.required],
       email: ["",Validators.required,Validators.email],
       tel: ["",Validators.required,Validators.minLength(8)],
       password: ["",Validators.required,Validators.minLength(5)],
       confirmPassword: ["",Validators.required,Validators.minLength(5)],
    });
  }
  saveUser(User: any) {
    console.log("User added succefully", this.user);
  }
}
