import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {
  navLinks = [
    { displayName: 'Hjem', href: '#test1' },
    { displayName: 'Ansatte', href: '#test2' },
    { displayName: 'Kontakt oss', href: '#test3' },
  ];

  constructor() { }
  @Output('cancellation') cancellation = new EventEmitter();

  ngOnInit() {}

  
  onBgClick() {
    console.log("test");
    this.cancellation.emit();
  }
}
