import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

declare var AOS: any;
declare var gsap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = "Sagarlks";
  currentYear: number = new Date().getFullYear();

  @ViewChild('contacts')contacts!: ElementRef;
  
  constructor(private readonly router: Router){

  }

  ngOnInit(){
    AOS.init();

    gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
    gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 1, x: 20 });
    
    gsap.from(".nav-item", {
      opacity: 0,
      duration: 1,
      delay: 1.2,
      y: 30,
      stagger: 0.2,
    });
  }

  navigatToSection(element: Element){
    element.scrollIntoView();
  }

  redirectToContact(){
    this.contacts.nativeElement.scrollIntoView();
  }

}
