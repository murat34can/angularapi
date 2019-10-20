import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  moviesDetailData = null;

  @Input()
  set moviesDetail(data) {    
    this.moviesDetailData = data;
  }
  
  @Output() moviesDetailEvent: EventEmitter<Object> = new EventEmitter<Object>();
  back(){    
    this.moviesDetailEvent.emit("back");
  }

}
