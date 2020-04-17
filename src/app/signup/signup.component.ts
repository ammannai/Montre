import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { WatchService } from '../services/watch.service';
import { MustMatch } from '../validators/mustMatch';

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  user: User;
  id: number;
  userForm: FormGroup;
  sum:number ;
  constructor(
     private formBuilder: FormBuilder ,
     private watchService : WatchService ) {}

  ngOnInit() {
    this.user = new User("", "", "", "", "", "");
    this.sum = this.watchService.calcul(5,5);
    this.userForm = this.formBuilder.group({
     id: [""],
      firstName: [
        "",
        [Validators.required, Validators.maxLength(8), Validators.minLength(2)],
      ],
       lastName: ["",Validators.required],
       email: ["",[Validators.required,Validators.email]],
       tel: ["",[Validators.required,Validators.maxLength(8)]],
       password: ["",[Validators.required,Validators.minLength(5),Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]],
       confirmPassword: ["",[Validators.required,Validators.minLength(5)]],
       validator: MustMatch('password', 'confirmPassword')
    });
  }
  saveUser(User: any) {
    console.log("User added succefully", this.userForm.value);
  }
}
