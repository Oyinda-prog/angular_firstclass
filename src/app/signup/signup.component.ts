import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
interface StudentInterface{
  firstname:string,
  lastname:string,
  email:string,
  address:string,
  password:string,
  age:string
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
constructor(public routes:Router){}

public firstname=''
public lastname=''
public age=''
public email=''
public password=''
public address=''
public message=''

public studentarray:StudentInterface[]=[]
ngOnInit(){
  this.studentarray=JSON.parse(localStorage.getItem('students')!)
}
signup(){
let studentobj:StudentInterface={
firstname:this.firstname,
lastname:this.lastname,
email:this.email,
age:this.age,
address:this.address,
password:this.password
}
this.studentarray.push(studentobj)
localStorage.setItem('newstudents',JSON.stringify(this.studentarray))
console.log(localStorage['newstudents']);

if(localStorage['newstudents']){
   this.routes.navigate(['/signin'])
}
else{
 this.message='Registration not successful'
}
}

}

