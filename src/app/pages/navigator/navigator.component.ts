import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  transition,
  style,
  query,
  animate,
  stagger,
  keyframes
} from '@angular/animations';
import { HamburgerClickService } from 'src/app/services/hamburger-click.service';


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
                    style({ offset: 0, overflow: 'hidden'  }),
                    style({ marginLeft: '10%', offset: 0.1, overflow: 'hidden'  }),
                    style({ marginLeft: '0%', offset: 0.4, overflow: 'hidden' }),
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
    { displayName: 'Hjem', href: '#Forside' },
    { displayName: 'Om oss', href: '#OmOss' },
    { displayName: 'Kontakt oss', href: '#KontaktOss' },
  ];
  isOpen: boolean = false;
  @Output('cancellation') cancellation = new EventEmitter();

  constructor(private HamburgerClickService: HamburgerClickService) { 
    HamburgerClickService.listenToButtonClick.subscribe( x => this.closeMenu());
   }
  
  closeMenu(){
    this.cancellation.emit();
  }

  ngOnInit() {}
  onBgClick() {
    this.HamburgerClickService.clickButton();
    this.cancellation.emit();
  }
}
