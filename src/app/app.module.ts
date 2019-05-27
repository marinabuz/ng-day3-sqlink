import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule, PreloadAllModules } from "@angular/router";


import { ErrorComponent } from './pages/error/error.component';
import { PageTabsDemoComponent } from './pages/page-tabs-demo/page-tabs-demo.component';

import { AppComponent } from './app.component';
import { TabsModule } from './tabs';
import { RepeatDirective } from './directives/repeat.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { NoopInterceptor } from './users/noop.service';
import { HomeComponent } from './pages/home/home.component';
import { CustomPreloading } from './common/custom-preloading-strategy';
import { UsersResolve } from './common/UsersLoader';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
];

@NgModule({
  declarations: [
    AppComponent,
    RepeatDirective,
    HighlightDirective,
    PageTabsDemoComponent,
    HomeComponent,
    ErrorComponent,
     
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '' , pathMatch : 'full', redirectTo : 'home'},
      { 
        path : 'home' , 
        component : HomeComponent,
        canActivate:[ UsersResolve],
        canDeactivate : [UsersResolve],
        resolve: {
          users : UsersResolve
        } 
      },
      { path : 'tabs' , component : PageTabsDemoComponent },
      { path : 'users' , 
        data: {
          preload : false         
        },
        loadChildren : './users/users.module#UsersModule' },
      { path : 'error' , component: ErrorComponent },
      { path : '**' , redirectTo : 'error'}
    ],{
      useHash : true,
      enableTracing : false,
      preloadingStrategy : CustomPreloading//PreloadAllModules
    }),

    TabsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
