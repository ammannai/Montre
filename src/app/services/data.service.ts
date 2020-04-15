import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
import { Montre } from '../montre';
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
montre : Montre;
  constructor() { }
  createDb(){

    let  montres =  [
      {id: 1, price: 200, name: "test",  marque: "Swatch",description: "Persistent 1"},
      {id: 2, price: 300,  name: "test", marque: "Festina",description: "Persistent 2"},
      {id: 3, price: 400,  name: "test", marque: "Citizen", description: "Persistent 3"},
      {id: 4, price: 500, name: "test",  marque: "Smile", description: "Persistent Smile"}
     ];
  
  
  
  
 
    return {montres};
 
   }
}
