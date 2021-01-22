import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  labelHome = 'Home';
  labelProduct = 'Product';
  labelContact = 'Contact';
  labelAbout = 'About';

  /* test one way binging */
  labels = {
    home: 'Home',
    product: 'Product',
    contact: 'Contact',
    about: 'About',
  };

  constructor() {}

  ngOnInit(): void {}
}
