import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string = 'https://static.wikia.nocookie.net/moviedatabase/images/8/8c/Tony_Stark.jpg';
  contentTitle: string = 'MINHA NOTÍCIA';
  contentDescription: string = 'Olá Mundo!';

  constructor() {}

  ngOnInit() {
    console.log('OnInit');
  }
}
