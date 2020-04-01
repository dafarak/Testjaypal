import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs/behaviorsubject';
import { BehaviorSubject,Observable,Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  public myMethodSubject = new Subject<any>();
public massageSource = new BehaviorSubject<string>("defoult msg");
currentMessage = this.massageSource.asObservable()
myMethod$ = this.myMethodSubject.asObservable();
  constructor() {
    
   }
   


//    getuserdata(data:String,x:string,y:string,z:string) {
//     data = localStorage.getItem('lname')
//     x = localStorage.getItem('fname')
//     y = localStorage.getItem('text')
//     z = localStorage.getItem('gender')
//     console.log(data);
//     console.log(x);
//     console.log(y);
//     console.log(z);
//      // I have data! Let's return it so subscribers can use it!
//     // we can do stuff with data if we want
   

    
// }

sendmessage(message: any){
  this.myMethodSubject.next(message);
  console.log(message)
  return message
}


//   change(massage:string,text:any,fname:any,lname:any,gender:any){
// // this.massageSource.next(massage)
// lname = localStorage.getItem('lname')
// fname = localStorage.getItem('fname')
// text = localStorage.getItem('text')
// gender = localStorage.getItem('gender')
// this.massageSource = lname

//   }
}

