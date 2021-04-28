import { Component, OnInit } from '@angular/core';
import {Dias,listaSemana} from '../../interfaces/dias';
import {ActivatedRoute} from '@angular/router';
import {SharingService} from '../../sharing.service'
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  listaV=listaSemana;
  listaRM=listaSemana;
  listaA=listaSemana;
  listaBB=listaSemana;
  region:any;
  reciever!:Subscription;
  temp:any = 'C';
  update:any;
  constructor(private route:ActivatedRoute, private sharing:SharingService) { 

    
  }
  changetempC(){
    this.temp = 'C';
    //if( document.getElementById("Cels") != null){
      //document.getElementById!("Cels").innerHTML = listaSemana![0].tempc.toString();
    //}
  };
  changetempF(){
    this.temp = 'F';
    //if( document.getElementById("Faren") != null){
      //document.getElementById!("Faren").innerHTML = listaSemana![0].tempf.toString();
    //}
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.region = params.get('region');
    });
    this.reciever =   this.sharing.temp.subscribe((update:any) => {this.temp = update});
    console.log(this.temp);
  }

}
