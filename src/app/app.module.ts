import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from './app.component';
import { TabsModule } from './tabs';
import { RepeatDirective } from './directives/repeat.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { NoopInterceptor } from './users/noop.service';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
];

@NgModule({
  declarations: [
    AppComponent,
    RepeatDirective,
    HighlightDirective,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    TabsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
