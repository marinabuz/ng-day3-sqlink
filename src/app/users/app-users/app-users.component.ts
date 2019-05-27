import { UsersBlService } from 'src/app/users/users.bl.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-users',
  templateUrl: './app-users.component.html',
  styleUrls: ['./app-users.component.css']
})
export class AppUsersComponent implements OnInit {

  constructor(public bl :UsersBlService) { }

  ngOnInit() {
  }

}
