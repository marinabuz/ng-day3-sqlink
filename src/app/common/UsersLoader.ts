import { IUser } from './../users/user.interface';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, CanDeactivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { SecurityService } from './security.service';

@Injectable({
    providedIn : 'root'
})
export class UsersResolve implements Resolve<any> , CanActivate, CanDeactivate<any> {
    
    constructor( private router : Router , private security: SecurityService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        console.log('canActivate');
        
        if(!this.security.isLogin){
            this.router.navigateByUrl('/login');
        }

        return this.security.isLogin;
    }
    
    canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        console.log('canDeactivate');
        return new Promise( resolve => {
            resolve(window.confirm('yes or no?'));
        });
    }

    resolve(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot) {
            return new Promise( resolve => {
                setTimeout( resolve , 3000, [1,2,3,4,5,6,7,8,9])
            });
    }

}