import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';

const stockRoutes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'users/id/:id', component: UserDetailComponent },
  { path: 'users/new', component: UserFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(stockRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
