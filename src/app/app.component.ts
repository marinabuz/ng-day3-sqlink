import { UsersBlService } from './users/users.bl.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div >
      <h3> NG Day 3</h3>
      
      <nav>
        <a routerLink="/home">home</a> | 
        <a routerLink="/users/123">users</a> | 
        <a [routerLink]="['users', '111']" fragment= 'aaa'>users aaa</a> | 
        <a [routerLink]="['users', '111']" fragment= 'bbb'>users bbb</a> | 
        <a routerLink="/tabs">tabs</a> | 
        <a routerLink="/error">error</a> | 

      </nav>
      <div>
        <router-outlet></router-outlet>
      </div>
    </div>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'ng-day3';
  
}
