import { IUser } from './../user.interface';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  id:string;
  
  @Input() user : IUser;

  constructor(public route: ActivatedRoute) { 
    route.params.pipe(
      tap( p => this.id = p.xxx )
    ).subscribe();

    route.fragment.pipe(
      tap( f => {
        
        console.dir(f);
      } )
    ).subscribe()
  }

  ngOnInit() {
  }

}
