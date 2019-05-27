import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  active:boolean = false;
  @Input() title:string = "";

  constructor() { }

  ngOnInit() {
  }

}
