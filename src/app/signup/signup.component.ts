import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { WatchService } from '../services/watch.service';
import { MustMatch } from '../validators/mustMatch';
import { UserService } from '../services/user.service';

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  user: User;
  id: string;
  userForm: FormGroup;
  sum:number ;
  constructor(
     private formBuilder: FormBuilder ,
     private userService : UserService ) {}

  ngOnInit() {
    this.user = new User('',"", "", "", "", "", "");
    this.userForm = this.formBuilder.group({
     
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
  saveUser(i: any) {
    console.log("User added succefully", this.userForm.value);
    this.userService.addUser(this.userForm.value).subscribe(
      data => {
        console.log('Data',data);
        
      }
    )
  }
}
