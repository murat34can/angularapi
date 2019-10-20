import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  moviesData = null;

  @Input()
  set movies(data) {    
    this.moviesData = data;
  }

  ngOnInit() {
  }

}
