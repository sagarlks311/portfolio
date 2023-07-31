import { Directive,Input } from '@angular/core';

@Directive({
    selector : '[href]',
    host : {
      '(click)' : 'preventDefault($event)'
    }
  })
  export class LinkDirective {
    @Input() href: any;
    preventDefault(event: any) {
      if(this.href == "#") event.preventDefault();
    }
  }