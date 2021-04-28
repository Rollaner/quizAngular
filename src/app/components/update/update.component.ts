import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators,AbstractControl} from '@angular/forms';
import {Dias,listaSemana}from '../../interfaces/dias'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})

export class UpdateComponent implements OnInit {

  regiones:any = ['Valparaíso', 'Region Metropolitana', 'Araucania', 'Bío Bío']
  clima:any = ['Soleado','Nublado','Lluvia','Tormenta']
  dias:any = ['Lunes','Martes','Míercoles','Jueves','Viernes','Sábado','Domingo']
  updateForm:FormGroup;
  lista=listaSemana;
  constructor(private fb:FormBuilder) {
  this.updateForm=this.fb.group({
       region:['', Validators.required],
       clima:['', Validators.required],
       dia:['', Validators.required],
       temperature:this.fb.group({
        temp:['', Validators.required],
        grad:['']
       })
  });
}
  //this. temp= this.updateForm.controls['temp'];

ngOnInit(): void {
  }

  update(){
    console.log(this.updateForm.value);
  }

}
