import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-templatedrivenform',
  standalone: true,
  imports: [FormsModule, CommonModule,ReactiveFormsModule],
  templateUrl: './templatedrivenform.component.html',
  styleUrl: './templatedrivenform.component.css'
})
export class TemplatedrivenformComponent {
  constructor(public formbuilder:FormBuilder){}
public firstname=''
public city=''
check=''
boxs=false
formone=this.formbuilder.group({
firstname:['',[Validators.required]],
lastname:['']
})

submit_two(){
console.log(this.formone.controls['firstname'].setValue(''));

}
ngOnInit(){
  console.log(this.boxs);
  
}
checks(){

console.log(this.boxs);
}
submit(){

}
}
