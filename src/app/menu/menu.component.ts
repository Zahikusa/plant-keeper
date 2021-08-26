import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  logButtonClick(): void {
    console.log('Button was just clicked :)');
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
