import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingService {


  private tempUpdate = new BehaviorSubject('C');
  temp = this.tempUpdate.asObservable();

  constructor() { }

  setTemp(temp:any){
    this.tempUpdate.next(temp);
  }
}
