import { Component,OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pwaApp';
  update:boolean=false;
  datas:any;

  constructor(updates:SwUpdate,private data:DataService){
    updates.available.subscribe(event=>{
        //this.update=true;
        updates.activateUpdate().then(()=>document.location.reload());
    })
  }
  ngOnInit(){
    this.data.getData().subscribe(res=>{
      this.datas=res;
    })
  }
}
