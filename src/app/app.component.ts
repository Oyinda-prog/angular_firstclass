import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { FormsModule } from '@angular/forms';
interface Objectname{
  firstname:string,
  lastname:string,
  age:number
}
interface Objectname3{
  firstname:string,
  lastname:string,
  age:number,
  address:string
}

interface Objectname2{
  email:string,
  address:string,
  firstname:string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,LandingpageComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'january_firstapp';
   public school:any=false  
  public firstname=''
  private lastname='Sunday'
  public age:undefined|number|string|boolean  
  public bool:boolean=false
  //typescript
  public address:string='No 10, Ogbomosho, Oyo State, Nigeria'
  public email:string ='samuel@gmail.com'
  public firststyling='form-control my-2 w-50 ' 
  public secstyling='col-4 mx-auto shadow-lg'
  public special=true
  
    
   public obj1:Objectname={
    firstname:'Daniel',
    lastname:'Segun',
    age:74
   }
   public obj2:Objectname2={
    email:'oyin@gmail.com',
    address:"ogbomosho",
    firstname:'Tolu'
   }

   public array1:number[]=[45,567,34,10]
   public array2:string[]=['Oyin','Lola','Samuel','Olamide'] 
   public array3:Objectname3[]=[
 
        {
      firstname:'Doyin',
      lastname:'Samsudeen',
      age:56,
      address:'Iwo'
    
    },
    {
      firstname:'Toyin',
      lastname:'Tobiloba',
      age:16,
      address:'Ogbomosho'
    
    }
   ]
   check(){
    // this.special=false
    this.special=!this.special
    console.log(this.special);
    
   }

   checkindex(index:number){
    console.log(index);
    

   }

  ngOnInit(){

    this.firstname='Tobi'
    this.bool=true
    this.age=false
    for (let index = 0; index < this.array3.length; index++) {
      const element = this.array3[index];
      console.log(element);
      
    }
     
  }

//union, inference, interface
  

}
