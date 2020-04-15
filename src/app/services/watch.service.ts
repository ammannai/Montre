import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WatchService {

  constructor() { }
  calcul(a:number , b : number){
    console.log("sum of a+b = ", a+b);
    
    return a+b;
  }
}
