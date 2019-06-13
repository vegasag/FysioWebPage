import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  lat: number = 62.91682;
  lng: number = 7.44701;
  zoom: number = 15;
  constructor() { }

  ngOnInit() {
  }
}
