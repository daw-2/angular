import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() title?: string;
  isCollapsed: boolean = false;

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.isCollapsed = !this.isCollapsed;
  }

}
