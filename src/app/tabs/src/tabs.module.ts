import { NgModule } from '@angular/core';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        TabsComponent,
        TabComponent
    ],
    declarations: [
        TabsComponent,
        TabComponent
    ],
    providers: [],
})
export class TabsModule { }
