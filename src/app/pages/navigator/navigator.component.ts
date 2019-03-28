import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
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
    console.log(window.pageYOffset);
  }

  @HostListener("window:scroll",[])
  
  onWindowScroll(){
    let number = window.pageYOffset || document.documentElement.scrollTop
    if (number < 100) {
      this.shadowLineVisible = false;
    }
    else if (number > 10) {
      this.shadowLineVisible = true;
    }
  }
}
