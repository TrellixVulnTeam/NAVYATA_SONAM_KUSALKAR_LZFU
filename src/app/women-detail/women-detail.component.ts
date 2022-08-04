import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women-detail',
  templateUrl: './women-detail.component.html',
  styleUrls: ['./women-detail.component.css']
})
export class WomenDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  OnActive(){
    window.scroll(0,0);
  }
}

