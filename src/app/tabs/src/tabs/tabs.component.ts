import { TabComponent } from './../tab/tab.component';
import { Component, OnInit, ContentChildren, QueryList, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @ContentChild('titleTemplate',{read:TemplateRef}) titleRef: TemplateRef<any>;
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  setActive(tab:TabComponent){
    this.tabs.forEach( t=>t.active = false);
    tab.active = true;
  }
  constructor() { }

  ngOnInit() {
  }

}
