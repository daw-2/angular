import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  author: Author = new Author(
    'Dayan', 'Sarah', '1991-11-18', 'sarah-dayan.jpg'
  );

  constructor() { }

  ngOnInit(): void {
  }

}
