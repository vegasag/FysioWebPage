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

  testing = function (e){
    e.preventDefault();
  }

  ngOnChanges(){

  }
  ngOnInit(){
  }
  
  toggleNavMenu(){
    this.showNavigationMenu = !this.showNavigationMenu;
    const toggleScrollabilityOnScreen = this.showNavigationMenu ? "hidden" : "auto";
    document.body.style.overflow = toggleScrollabilityOnScreen;
    this.toggleScrollabilityOnPhone(this.showNavigationMenu);
  }
  

  toggleScrollabilityOnPhone(active){
    if (active == true) {
      window.addEventListener("touchmove", this.testing, {passive: false});
    }
    else {
      window.removeEventListener("touchmove", this.testing, false);
    }
  }

  cancelNavMenu(){
    document.body.style.overflow = "auto";
    this.showNavigationMenu = false;
    this.toggleScrollabilityOnPhone(this.showNavigationMenu);
  }
}
