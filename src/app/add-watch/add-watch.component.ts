import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Montre } from '../montre';

 
@Component({
  selector: 'app-add-watch',
  templateUrl: './add-watch.component.html',
  styleUrls: ['./add-watch.component.css']
})
export class AddWatchComponent implements OnInit {
montre : Montre ; 
montreForm : FormGroup ;
id : number ;
formBuilder : FormBuilder ; 
  constructor() { }

  ngOnInit() {
    this.montre = new Montre(0,0,"","","");
    this.montreForm= this.formBuilder.group({
     id : [''],
     price : [''],
      name : [''],
      marque : [''],
      description :['']
      
    })
  }
  saveMontre(montre: any) {
    console.log("Mondre added ", this.montre) ;
  }
}
