import { Component, OnInit } from '@angular/core';
import { details} from '../form/class';
import { NgForm } from '@angular/forms';
import { UserService} from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  text:any
fname:any
lname:any
navigate:any

slides:any
searchterm:string
  constructor(private routes: Router) { }
  
  data:details;
  ngOnInit() {
    this.slides =[
      {
        id:1,
        img :"../../assets/img/1.jpg",
        paragraph: "Samsung is a South Korean multinational conglomerate headquartered in Samsung Town, Seoul. ",
        product:"semsung",
        bigparagraph:"Division, Telecommunication Systems Division, Computer Division, MP3 Business Team, Mobile Solution Centre and Telecommunication R&D Centre. Telecommunication Business produces a full spectrum of products from mobiles and other mobile devices such as MP3 players and laptop computers to telecommunication network infrastructure. Headquarters is located in"
      },
       {
        id:2,
        img :"../../assets/img/2.jpg",
        paragraph: "Discover great accessories to complement your BlackBerry smartphone.",
        product:"BlackBerry",
        bigparagraph:"BlackBerry Limited is a Canadian multinational company specialising in enterprise software and the Internet of things. Originally known as Research In Motion, it is best known to the general public as the former developer of the BlackBerry brand of smartphones, and tablets"
       },
       {
        id:3,
        img :"../../assets/img/3.jpg",
        paragraph: "In 2017, OPPO won the bid to sponsor the Indian national cricket team and has achieved ",
        product:"oppo",
        bigparagraph:"In 2017, OPPO won the bid to sponsor the Indian national cricket team and has achieved the rights to display their logo on the team's kits from 2017 to 2022. Within this period the Indian national cricket team will play 259 International matches consisting of 62 Tests, 152 ODIs, and 45 T20 Internationals. This number also includes the 2019 World Cup in England and 2020 T20 World Cup in Australia. The current base price for bilateral matches involving India has been set at Rs 4.1 crore (approx.) and for Asian Cricket Council (ACC) and International Cricket Council (ICC) matches, it is Rs 1.56 crore (approx.) - almost a four-fold increase from its earlier rate"
       },
       {
        id:4,
        img :"../../assets/img/4.jpg",
        paragraph: "OnePlus was founded on 16 December 2013 by former Oppo vice-president Pete Lau and Carl Pei",
        product:"1+",
        bigparagraph:"OnePlus was founded on 16 December 2013 by former Oppo vice-president Pete Lau and Carl Pei.[8] According to Chinese public records, OnePlus' only institutional shareholder is Oppo Electronics.[4] Lau denied that OnePlus was a wholly owned subsidiary of Oppo and stated that Oppo Electronics and not Oppo Mobile (the phone manufacturer) is a major investor of OnePlus and that they are "
       },
       {
        id:5,
        img :"../../assets/img/5.jpg",
        paragraph: "The iPhone is a line of smartphones designed and marketed by Apple Inc. All generations of the iPhone use Apple's iOS mobile operating system software.",
        product:"Iphone",
        bigparagraph:"The user interface is built around the device's multi-touch screen, including a virtual keyboard. The iPhone has Wi-Fi and can connect to cellular networks. An iPhone can take photos, play music, send and receive emails, browse the web, send and receive text messages, record notes, perform mathematical calculations, and receive visual voicemail. Shooting video also became a standard feature with the iPhone 3GS. Other functionality, such as video games, reference works, and social networking, can be enabled by downloading mobile apps. As of January 2017, Apple's App Store contained more than 2.2 million applications available for the iPhone."
       },
       {
        id:6,
        img :"../../assets/img/6.jpg",
        paragraph: "Motorola, Inc was an American multinational telecommunications company founded on September 25, 1928, based in Schaumburg, ",
        product:"motorola",
        bigparagraph:"Motorola designed and sold wireless network equipment such as cellular transmission base stations and signal amplifiers. Motorola's home and broadcast network products included set-top boxes, digital video recorders, and network equipment used to enable video broadcasting, computer telephony, and high-definition television. Its business and government customers consisted mainly of wireless voice and broadband systems (used to build private networks), and public safety communications systems like Astro and Dimetra. These businesses (except for set-top boxes, wireless networks, and cable modems) are now part of Motorola Solutions. Google sold Motorola Home (the former General Instrument cable businesses) to the Arris Group in December 2012 for US$2.35 billion"
       }
      
      ]

   
  }

  
  onclick(id,img,p,product){
    console.log(id)
    localStorage.setItem( 'id',id,);
    localStorage.setItem( 'img',img,);
    localStorage.setItem( 'p',p,);
    localStorage.setItem( 'product',product,);
    this.routes.navigate(['user']);
    
  }
  

}
