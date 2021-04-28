import { Component, OnInit } from '@angular/core';
import { SharingService } from '../../sharing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  broadcast:any;
  temp:any;

changetempC(){
    this.broadcast.setTemp('C');
  };
changetempF(){
    this.broadcast.setTemp('F');
  };

  constructor() {

   }


  ngOnInit(): void {
  }

}
