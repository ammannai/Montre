import { Component, OnInit } from '@angular/core';
import { Montre } from '../montre';
import { WatchService } from '../services/watch.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-watch',
  templateUrl: './update-watch.component.html',
  styleUrls: ['./update-watch.component.css']
})
export class UpdateWatchComponent implements OnInit {
montre : Montre ;
id : string ; 
  constructor(
    private watchService : WatchService ,
    private activatedRoute : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
this.watchService.displayMontre(this.id).subscribe (
response=> {
this.montre= response;
}
)
  }

  updateWatch(m:any){
    this.watchService.updateMontre(this.montre).subscribe (
    response=> {
    this.router.navigate(["/admin"]);
    }
    )
    
      }
}
