import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  constructor(private route: ActivatedRoute) {
    console.dir(route.snapshot.data.users);
   }

  ngOnInit() {
  }

}
