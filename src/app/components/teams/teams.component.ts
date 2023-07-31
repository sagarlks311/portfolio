import { Component, OnInit } from '@angular/core';

declare var Glide: any;

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const glide = document.querySelector(".glide");
  if (glide)
    new Glide(glide, {
      type: "carousel",
      startAt: 0,
      perView: 3,
      gap: 30,
      hoverpause: true,
      autoplay: 2000,
      animationDuration: 800,
      animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
      breakpoints: {
        996: {
          perView: 2,
        },
        768: {
          perView: 1,
        },
      },
    }).mount();
  }

}
