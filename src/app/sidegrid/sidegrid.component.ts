import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidegrid',
  templateUrl: './sidegrid.component.html',
  styleUrls: ['./sidegrid.component.css']
})
export class SidegridComponent implements OnInit {

  public msg ='';
  constructor() { }

  ngOnInit() {
  }

  onclick() {
    console.log('hi');
  }
}
