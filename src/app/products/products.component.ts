import { Component, OnInit } from '@angular/core';
import { Montre } from '../montre';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
montres : Montre[];
  constructor() { }

  ngOnInit() {
  }
calculate(x:number,y:number){
  return x+y;
}
}
