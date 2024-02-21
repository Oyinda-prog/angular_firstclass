import { Component } from '@angular/core';
import { Behaviorchild1Component } from '../behaviorchild1/behaviorchild1.component';
import { Behaviorchild2Component } from '../behaviorchild2/behaviorchild2.component';
import { Behaviorchild3Component } from '../behaviorchild3/behaviorchild3.component';

@Component({
  selector: 'app-behaviorsubjectparent',
  standalone: true,
  imports: [Behaviorchild1Component, Behaviorchild2Component,Behaviorchild3Component],
  templateUrl: './behaviorsubjectparent.component.html',
  styleUrl: './behaviorsubjectparent.component.css'
})
export class BehaviorsubjectparentComponent {

}
