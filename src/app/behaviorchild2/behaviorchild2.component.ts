import { Component } from '@angular/core';
import { BehaviorService } from '../services/behavior.service';
import { myname } from '../behaviorchild3/behaviorchild3.component'

@Component({
  selector: 'app-behaviorchild2',
  standalone: true,
  imports: [],
  templateUrl: './behaviorchild2.component.html',
  styleUrl: './behaviorchild2.component.css'
})
export class Behaviorchild2Component {
  constructor(public behavior:BehaviorService){}
  public behavior_obj:any={}
ngOnInit(){
// console.log(this.behavior.behavior);
this.behavior.behavior.subscribe(response=>{
  // console.log(response);
  this.behavior_obj=response
  console.log(this.behavior_obj);
},(error=>{
  console.log(error);
  
}))

}
}