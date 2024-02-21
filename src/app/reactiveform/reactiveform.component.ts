import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {
  public firstname:any=''
constructor(public formbuilder:FormBuilder){}
public formone=this.formbuilder.group({
  firstname:['',Validators.required],
  email:[''],
  password:['']
})

ngOnInit(){
  // console.log(this.formone.value);
  console.log(this.formone.value['email']);
  this.firstname=this.formone.value['email']
  //console.log(this.firstname);
  this.formone.controls['firstname'].setValue('')
  this.formone.controls['email'].setValue('')
  this.formone.controls['password'].setValue('')

  
}
}
