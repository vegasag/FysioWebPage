import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {
  navLinks = [
    { displayName: 'Hjem', href: '#LandingPage' },
    { displayName: 'Ansatte', href: '#Employees' },
    { displayName: 'Kontakt oss', href: '#ContactUs' },
  ];
  isOpen: boolean = false; 

  constructor() { }

  ngOnInit() {}
  onBgClick() {
    this.isOpen = !this.isOpen;
  }
  toggleOpen(){
    this.isOpen = !this.isOpen;
  }

}
