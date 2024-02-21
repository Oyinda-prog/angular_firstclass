import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorService } from '../services/behavior.service';
import { LandingpageserviceService } from '../services/landingpageservice.service';
import { myname } from '../behaviorchild3/behaviorchild3.component';


@Component({
  selector: 'app-behaviorchild1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './behaviorchild1.component.html',
  styleUrl: './behaviorchild1.component.css'
})
export class Behaviorchild1Component {
 constructor(public behavior:BehaviorService){}

public behavior_array:any=[
  {
    firstname:'Johnson',
    lastname:'Israel',
    age:'45',
    email:'israel@gmail.com'
      },
      {
        firstname:'Elon',
        lastname:'Musk',
        age:'46',
        email:'elonmusk@gmail.com'
          },
          {
            firstname:'Captain',
            lastname:'College',
            age:'12',
            email:'captain@gmail.com'
              }
]
sendlist(list:any){
  this.behavior.behavior.next(list)
}
}
