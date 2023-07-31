import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/apps.constants';

declare var TypeIt: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  name: string = "Lok Priya Sagar";
  constructor() { }

  ngOnInit(): void {
    this.typeItInit();
  }

  typeItInit(){
    new TypeIt("#type2", {
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
      .type("Programmer", { delay: 500 })
      .pause(600)
      .delete(10)
      .go();
  }

  downloadCV(){
    window.open(AppConstants.CV_LINK, '_blank')?.focus();
  }

}
