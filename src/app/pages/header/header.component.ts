import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  header = document.getElementById("myHeader");
  isOpen: boolean = false; 
  @Output('ExploreContent')
  ExploreContent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleOpen(){
    this.isOpen = !this.isOpen;
    this.ExploreContent.emit();
  }

}
