import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  model:any =[3][3];
  newmodel:any =[3][3];
  cached:any;
 
  y:any;
 
  constructor(private routes: Router) { 
    this.cached =
    [
     
      {
        id:"",
        img : "",
        p  : "",
        product:""
      },
    ]
    this.cached.id = localStorage.getItem('id')
    this.cached.img = localStorage.getItem( 'img');
    this.cached.p = localStorage.getItem( 'p');
    this.cached.product = localStorage.getItem( 'product')
    console.log(this.cached.id )
    console.log(this.cached.img)
    console.log(this.cached.p)
    console.log(this.cached.product)
  }

  ngOnInit() {
    this.model =
    [
     { 
      lname:localStorage.getItem('lname'),
      fname: localStorage.getItem('fname'),
      text: localStorage.getItem('gender'),
    }
    ]
  
   
  }
 
  onBack(){
    this.routes.navigate(['']);
  }


}

