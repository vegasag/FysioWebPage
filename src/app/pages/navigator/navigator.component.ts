import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import {
  trigger,
  transition,
  style,
  group,
  query,
  animate,
  stagger,
  state,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
  animations: [
    trigger('slideIn', [
      transition('* => *', [
        query(':enter', style({ marginLeft: '50%', opacity: 0 }), {
          optional: true
        }),
        query(':leave', style({ marginLeft: '0%', opacity: 1 }), {
          optional: true
        }),
        query(
          ':enter',
          [
            stagger('0.2s', [
              animate(
                '0.5s ease-out',
                keyframes([
                  style({ offset: 0 }),
                  style({ marginLeft: '0%', opacity: 0.8, offset: 0.8 }),
                  style({ marginLeft: '-10%', opacity: 1, offset: 0.9 }),
                  style({ marginLeft: '0%', opacity: 1, offset: 1 })
                ])
              )
            ])
          ],
          { optional: true }
        ),
        query(
          ':leave',
          [
            stagger('0.2s', [
              animate(
                '0.5s ease-in',
                keyframes([
                  style({ offset: 0 }),
                  style({ marginLeft: '10%', offset: 0.1 }),
                  style({ marginLeft: '0%', offset: 0.4 }),
                  style({ marginLeft: '-50%', opacity: 0, offset: 1 })
                ])
              )
            ])
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class NavigatorComponent implements OnInit {
  navLinks = [
    { displayName: 'Hjem', href: '#LandingPage' },
    { displayName: 'Ansatte', href: '#Employees' },
    { displayName: 'Kontakt oss', href: '#ContactUs' },
  ];
  isOpen: boolean = false; 
  shadowLineVisible: boolean = false;
  constructor() { }

  ngOnInit() {}
  onBgClick() {
    this.isOpen = !this.isOpen;
  }
  toggleOpen(){
    this.isOpen = !this.isOpen;
  }

  @HostListener("window:scroll",[])
  
  onWindowScroll(){
    let number = window.pageYOffset || document.documentElement.scrollTop
    if (number < 150) {
      this.shadowLineVisible = false;
    }
    else if (number > 10) {
      this.shadowLineVisible = true;
    }
  }
}
