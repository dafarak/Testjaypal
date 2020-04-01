import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user.component';
import { UserService} from '../../user.service';
@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
  
text:any
fname:any
lname:any
gender:any
x:any
public Message =[];
  constructor(private data:UserService) {}
   
  ngOnInit() {
  //      this.lname = localStorage.getItem('lname')
  //   this.fname = localStorage.getItem('fname')
  //  this.text = localStorage.getItem('text')
  //  this.gender = localStorage.getItem('gender')
    this.data.myMethod$.subscribe(message=>{
  this.Message=message
  // console.log(this.Message)
  var mas=[];
  mas=this.Message
  console.log(mas[0].a)
  return mas
})


//  console.log(this.Message)

//  this.data. getuserdata(this.gender,this.text,this.fname,this.x);
//  console.log(this.lname)
//  console.log(this.lname)
//  console.log(this.lname)
  }
  

}
