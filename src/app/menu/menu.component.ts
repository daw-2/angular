import { Component, OnInit, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isCollapsed: boolean = false;
  @Input() title: string;
  @Input() user;

  constructor(private authService: AngularFireAuth) { }

  ngOnInit() {
  }

  toggleCollapseNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

  logout() {
    this.authService.auth.signOut();
  }
}
