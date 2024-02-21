import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from '../services/loginservice.service';
interface StudentInterface{
  firstname:string,
  lastname:string,
  email:string,
  address:string,
  password:string,
  age:string
}
@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
constructor(public routes:Router, public service:LoginserviceService){}
public email=''
public password=''
public message=''

public studentarray:StudentInterface[]=[]
ngOnInit(){
this.studentarray=JSON.parse(localStorage['newstudents'])
console.log(this.studentarray);
}

signin(){
  
  
let currentuser=this.studentarray.find((student, index)=>this.email==student.email && this.password==student.password)
if(currentuser){
  this.service.getuser(currentuser)
localStorage.setItem('current_user',JSON.stringify(currentuser))
this.routes.navigate(['/dashboard'])
}
else{
this.message='User not found'
}

}
}
