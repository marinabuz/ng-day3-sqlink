import { UsersBlService } from './users/users.bl.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div >
      <tabs>
        <ng-template #titleTemplate let-tab="item">
          <img [src]="tab.title.picture.thumbnail" width="25" height="25">
          {{tab.title.name.first}}
        </ng-template>

        <tab
          *ngFor="let user of bl.users"
          [title]="user"
        >
          <app-user-detail [user]="user"></app-user-detail>
        </tab>
        
      </tabs>
    </div>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'ng-day3';
  constructor(public bl : UsersBlService){
    bl.load(5);
  }
}
