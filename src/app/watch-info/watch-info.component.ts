import { Component, OnInit } from '@angular/core';
import { Montre } from '../montre';
import { WatchService } from '../services/watch.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-watch-info',
  templateUrl: './watch-info.component.html',
  styleUrls: ['./watch-info.component.css']
})
export class WatchInfoComponent implements OnInit {
montre : Montre ;
id : string ;
  constructor(private watchService : WatchService,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.id =this.activatedRoute.snapshot.paramMap.get('id');
    this.watchService.displayMontre(this.id).subscribe(
      res => {
        console.log("This is my Watch", res);
        this.montre = res;
        
      }
    )
  }

}
