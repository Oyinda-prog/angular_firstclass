import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LandingpageserviceService {

  constructor() { }
 public item='My name is Oyindamola'
 public numberarray:number[]=[1,2,3,4,5,6,7,8,9,10]
 
 public returnitem(){
  return this.item
 }

public returnnum(){
  return this.numberarray
}
public getstudents(){
return JSON.parse(localStorage['newstudents'])
}
}
