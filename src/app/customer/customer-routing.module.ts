import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

import { UserListComponent } from '../user/user-list/user-list.component';

const stockRoutes: Routes = [
  { path: 'customers', component: CustomerListComponent },
  { path: 'customers/id/:id', component: CustomerDetailComponent },
  { path: 'customers/new', component: CustomerFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(stockRoutes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {}
