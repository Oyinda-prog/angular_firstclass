import { Component } from '@angular/core';
import { BehaviorService } from '../services/behavior.service';

@Component({
  selector: 'app-behaviorchild3',
  standalone: true,
  imports: [],
  templateUrl: './behaviorchild3.component.html',
  styleUrl: './behaviorchild3.component.css'
})
export class Behaviorchild3Component {
constructor(public beh:BehaviorService){}
ngOnInit(){
  this.beh.behavior.subscribe((data:any)=>{
    console.log(data);   
  })
}
}
export function myname(){
  let y=789;
  
}
