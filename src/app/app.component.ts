import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <tabs>

        <ng-template #titleTemplate let-tab="item">
          <span class="box">&nbsp;</span>
          {{tab.title}}
        </ng-template>
        <ng-template  [repeat]="3">
          <tab title="tab 111">
            <h3>hi, tab 1</h3>
          </tab>
        </ng-template>
        
        <tab title="tab 2" *repeat="5">
          <div>
            <h3>bla bla</h3>
          </div>
        </tab>
        <tab title="tab 3">
        <div>
          <h3>bla bla</h3>
        </div>
      </tab>
      </tabs>
    </div>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'ng-day3';
}
