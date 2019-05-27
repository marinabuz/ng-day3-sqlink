import { Component, OnInit } from '@angular/core';
import { UsersBlService } from 'src/app/users/users.bl.service';


@Component({
  selector: 'page-tabs-demo',
  templateUrl: './page-tabs-demo.component.html',
  styleUrls: ['./page-tabs-demo.component.css']
})
export class PageTabsDemoComponent implements OnInit {

  constructor(public bl : UsersBlService){
    //bl.load(5);
  }

  ngOnInit() {
  }

}
