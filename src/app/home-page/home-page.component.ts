import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor() {}
  active: string = 'appointment';
  activeBtn: boolean = false;
  arr = [1, 2, 3, 4, 5, 6, 7];

  ngOnInit(): void {}

  activeLink(value: string) {
    this.active = value;
  }

  headerFlip() {
    this.activeBtn = !this.activeBtn;
  }
}
