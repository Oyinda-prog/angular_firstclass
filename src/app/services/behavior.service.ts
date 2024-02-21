import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorService {

  constructor() { }
  public behavior=new BehaviorSubject<any>({
firstname:'Herbert',
lastname:'Bella',
age:'23',
email:'bella@gmail.com'
  }
)
}
