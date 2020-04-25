import { Component, OnInit } from '@angular/core';
import { Montre } from '../montre';
import { WatchService } from '../services/watch.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
montres : Montre[];
  constructor(
    private watchService : WatchService
  ) { }

  ngOnInit() {
this.watchService.getMontres().subscribe(
  (data)=>{
    this.montres=data;
    console.log("success transmission ",this.montres);
  }
)

    // this.montres =[
    //   {id: 1, price: 200, name: "test",  marque: "Swatch",description: "Persistent 1"},
    //   {id: 2, price: 300,  name: "test", marque: "Festina",description: "Persistent 2"},
    //   {id: 3, price: 400,  name: "test", marque: "Citizen", description: "Persistent 3"},
    //   {id: 4, price: 500, name: "test",  marque: "Smile", description: "Persistent Smile"}
    // ]
  }
// calculate(x:number,y:number){
//   return x+y;
// }
}
