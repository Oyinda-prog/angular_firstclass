import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eventchild',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './eventchild.component.html',
  styleUrl: './eventchild.component.css'
})
export class EventchildComponent {
@Input() public receivetext:any=''
public sendresponse=''
@Output() public eventemit= new EventEmitter

send(){
  this.eventemit.emit(this.sendresponse)
  this.sendresponse=''
}
}
