import { Component, OnInit, Output, EventEmitter, HostListener, Input } from '@angular/core';
import { HamburgerClickService } from 'src/app/services/hamburger-click.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() ExploreMenu = new EventEmitter();
  @Input() isOpen: boolean;

  staticNavLinks = [
    { displayName: 'Hjem', href: '#Forside' },
    { displayName: 'Om oss', href: '#OmOss' },
    { displayName: 'Kontakt oss', href: '#KontaktOss' },
    { displayName: 'Priser', href: "https://www.eide.kommune.no/_f/p1/i77769bc7-ea73-4190-a225-9895c7823786/priser-pa-fysioterapitjenester-kommunal-avtale.pdf", target:"_blank"}
  ];


  shadowLineVisible: boolean = false;
  isSmallScreen: boolean = false;
  isLargeScreen: boolean = false;

  constructor(private HamburgerClickService: HamburgerClickService) {
    this.HamburgerClickService.listenToButtonClick.subscribe(x => this.toggleIsOpen());
  }
  ngOnInit() { }

  exploreMenuClick() {
    this.ExploreMenu.emit();
    this.HamburgerClickService.clickButton();
  }

  toggleIsOpen() {
    this.isOpen = !this.isOpen;
    this.toggleShadowLineVisiblity();
  }

  toggleShadowLineVisiblity() {
    if (this.isOpen) {
      this.shadowLineVisible = false;
    } else {
      this.onWindowScroll();
    }
  }

  calculateCorrectScreenSize() {
    if (window.innerWidth < 768) {
      this.isSmallScreen = true;
    }
    if (window.innerWidth > 768) {
      this.isLargeScreen = true;
    }
  }

  @HostListener("window:scroll", [])

  onWindowScroll() {
    this.calculateCorrectScreenSize();
    let pixelHeightBeforeShowLine = 150;
    if (this.isSmallScreen) { 
      pixelHeightBeforeShowLine = 50 
    }
    else {
      pixelHeightBeforeShowLine = 75;
    }
    let pageYPosition = window.pageYOffset || document.documentElement.scrollTop
    if (pageYPosition < pixelHeightBeforeShowLine) {
      this.shadowLineVisible = false;
    }
    else if (pageYPosition > 10) {
      this.shadowLineVisible = true;
    }
  }
}
