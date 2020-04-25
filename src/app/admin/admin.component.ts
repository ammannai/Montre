import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../services/user.service';
import { Montre } from '../montre';
import { WatchService } from '../services/watch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
users : User[];
montres: Montre[];
montre: Montre;
tableHeaders : string[];
tableHeadersMontre: string[];
id:number;
  constructor( private userService : UserService,
    private watchService : WatchService,
    private router : Router) { }

  ngOnInit() {
    this.tableHeaders= ["ID", "First Name" , "Last Name", "Email"];
    this.tableHeadersMontre= ["ID", "Price" , "Marque", "Name", "Description"];
    this.userService.getUsers().subscribe(
      data => {
        this.users= data ;
        console.log(this.users);
      }    )
      this.getWathTable();
  }

displayWatch(id:number) {
this.router.navigate([`watch/${id}`]);

}
deleteWatch(x:Montre) {
this.watchService.deleteMontre(x).subscribe(
response=> {

this.getWathTable();
}
)

}
getWathTable(){
  this.watchService.getMontres().subscribe (
    (data)=> { this.montres = data;
 
    }
    )

}

updateWatch(w:Montre){
this.router.navigate([`updating/${w.id}`]);

}
  }

