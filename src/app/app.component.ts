import { Component } from '@angular/core';
import {
  trigger,
  transition,
  query,
  animateChild,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('animate', [
      transition('* => *', [
        query(':leave, :enter', [animateChild()], {
          optional: true
        })
      ])
    ])
  ]
})
export class AppComponent {
  showNavigationMenu = false;
  ngOnChanges(){

  }
  ngOnInit(){
  }
  
  toggleNavMenu(){
    this.showNavigationMenu = !this.showNavigationMenu;
    const scopeOverflow = this.showNavigationMenu ? "hidden" : "auto";
    document.body.style.overflow = scopeOverflow;
  }

  cancelNavMenu(){
    this.showNavigationMenu = false;
    document.body.style.overflow = "auto";
  }
}
