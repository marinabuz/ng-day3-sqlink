import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsModule } from './tabs';
import { RepeatDirective } from './directives/repeat.directive';

@NgModule({
  declarations: [
    AppComponent,
    RepeatDirective
  ],
  imports: [
    BrowserModule,

    TabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
