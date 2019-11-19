import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isCollapsed: boolean = false;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

  toggleCollapseNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
