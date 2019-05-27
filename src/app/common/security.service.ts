import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
isLogin:boolean = false;
constructor() { }

login(name,password){
  return new Promise( resolve => {
    setTimeout( ()=>{
                      this.isLogin = true;
                      resolve(true);
                } , 
                3000 
              )
});
}
logout(){
  this.isLogin = false;
}

}
