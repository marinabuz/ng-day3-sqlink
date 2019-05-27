import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { IUser } from './user.interface';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn : 'root'
})
export class UsersProxyService{
    
    constructor( private http : HttpClient ){}
    
    load(num:number=1) : Observable<IUser[]>{
        return this.http.get( `https://randomuser.me/api/?results=${num}` )
            .pipe(
                map( resp => resp['results'])
            );
    }

    load2(num:number=1) : Promise<IUser[]>{
        return this.http.get( `https://randomuser.me/api/?results=${num}` )
            .pipe(
                map( resp => resp['results'])
            ).toPromise();
    }
}