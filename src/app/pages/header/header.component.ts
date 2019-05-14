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
      pixelHeightBeforeShowLine = 150;
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
