import { IUser } from './user.interface';
import { UsersProxyService } from './users.proxy.service';

import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UsersBlService {

    users: IUser[] = [];

    constructor(private proxy : UsersProxyService) { 
        this.load(5);
    }

    async load(num:number){
        // option 1
        // this.proxy.load(num).pipe(
        //     tap( users => this.users = users )
        // ).subscribe();

        // option 2
        this.users = await this.proxy.load2(5);
    }
}