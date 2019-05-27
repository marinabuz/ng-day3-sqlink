import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AppUsersComponent } from './app-users/app-users.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '' , component : AppUsersComponent , children : [
        { path : ':xxx' , component :  UserDetailComponent }
      ]}
    ])
  ],
  declarations: [
    UserDetailComponent,
    AppUsersComponent
  ]
})
export class UsersModule { }
