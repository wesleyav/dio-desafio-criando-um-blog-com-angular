import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string = 'https://static.wikia.nocookie.net/moviedatabase/images/8/8c/Tony_Stark.jpg';
  contentTitle: string = 'MINHA NOTÍCIA';
  contentDescription: string = 'Olá Mundo!';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => console.log(value.get('id')));
  }
}
