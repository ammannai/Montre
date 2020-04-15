import { Component, OnInit, Input } from '@angular/core';
import { Montre } from '../montre';

@Component({
  selector: 'app-productgrid',
  templateUrl: './productgrid.component.html',
  styleUrls: ['./productgrid.component.css']
})
export class ProductgridComponent implements OnInit {

@Input() description : String ;
@Input() price : Number;
  constructor() { }

  ngOnInit() {
  }

}
