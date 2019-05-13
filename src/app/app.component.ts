import { Component, OnInit, OnChanges } from '@angular/core';
import {
  trigger,
  transition,
  style,
  group,
  query,
  animate,
  stagger,
  state,
  keyframes,
  animateChild
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
    console.log(this.showNavigationMenu);
  }
  ngOnInit(){
    console.log(this.showNavigationMenu);
  }
}
