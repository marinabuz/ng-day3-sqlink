import { PreloadingStrategy } from "@angular/router";

import { Route } from "@angular/compiler/src/core";

import { Observable, of } from "rxjs";
import { Injectable } from '@angular/core';

@Injectable({
    providedIn : 'root'
})
export class CustomPreloading implements PreloadingStrategy {

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (!route['data']) return of(null);
    return route['data']["preload"] ? load() : of(null);
  }
}
