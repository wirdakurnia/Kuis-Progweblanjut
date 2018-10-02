import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-tugas',
  templateUrl: './tugas.component.html',
  styleUrls: ['./tugas.component.css']
})
export class TugasComponent implements OnInit {
  allowNewServer = false;
  username='';

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000)
   }

  ngOnInit() {
  }

  onUpdateServerName(event: Event){
    this.username = (<HTMLInputElement>event.target).value;
  }

  onReset(){
    this.username = '';
  }

}
