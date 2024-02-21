import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LandingpageserviceService } from '../services/landingpageservice.service';
interface contactinterface{
  firstname:string,
  lastname:string,
  email:string,
  phonenumber:string,
  gender:string,
  address:string
}
@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './landingpage.component.html',  
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {
  constructor(public service:LandingpageserviceService){}

public first_name=''
public email=''
public phone_number=''
public address=''
public last_name=''
public gender=''
public obj={
  firstname:'Oladele'
}

public styles='form-control my-2 col-3'
public contactarray:contactinterface[]=[]

ngOnInit(){
  console.log(this.service.returnitem());
  
  if(localStorage['contacts']){
    this.contactarray=JSON.parse(localStorage['contacts'])
    console.log(this.contactarray);
    
  }
}
addContact(){
  
  let contactobj={
    firstname:this.first_name,
    lastname:this.last_name,
    phonenumber:this.phone_number,
    address:this.address,
    gender:this.gender,
    email:this.email
  }
  this.contactarray.push(contactobj)
  console.log(this.contactarray)
  localStorage.setItem('contacts',JSON.stringify(this.contactarray))
}


del(i:number){
console.log(i);

//  this.contactarray.splice(i,1)
let y='0123456789'

 let x=this.contactarray.filter((contact,index)=>index!=i)
   console.log(x);
   this.contactarray=x
   localStorage.setItem('contacts',JSON.stringify(this.contactarray))
 
// // console.log(array);
// this.contactarray=array
// console.log(this.contactarray);
// localStorage.setItem('contacts',JSON.stringify(this.contactarray))


}}

 