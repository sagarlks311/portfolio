import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppConstants } from 'src/app/apps.constants';


declare var gsap: any;
declare var TypeIt: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: string = "Lok Priya Sagar";
  sitesMap: any = AppConstants.SOCIAL_SITES;
  @Output() redirectToContact: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
   
    this.typeItInit();

    gsap.from(".banner", { opacity: 0, duration: 1, delay: 1, x: -200 });
    gsap.from(".hero h3", { opacity: 0, duration: 1, delay: 2, y: -50 });
    gsap.from(".hero h1", { opacity: 0, duration: 1, delay: 2.5, y: -45 });
    gsap.from(".hero h4", { opacity: 0, duration: 1, delay: 3, y: -30 });
    gsap.from(".hero a", { opacity: 0, duration: 1, delay: 3.5, y: 50 });
    gsap.from(".icons span", {opacity: 0,duration: 1,delay: 4,x: -30,stagger: 0.2,});
  }

  typeItInit(){
    new TypeIt("#type1", {
      speed: 120,
      loop: true,
      waitUntilVisible: true,
    })
      .type("Designer", { delay: 400 })
      .pause(500)
      .delete(9)
      .type("Developer", { delay: 400 })
      .pause(500)
      .delete(9)
      .type("Programmer", { delay: 400 })
      .pause(600)
      .delete(10)
      .go();
  }

  redirectTo(socialObj: any){
   window.open(socialObj.LINK, 'blank')?.focus();
  }

  navigatToContact(){
    this.redirectToContact.emit();
  }
 

}
