import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomerHeaderComponent } from './customer-header/customer-header.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerService } from './shared/customer.service';

import { FilterByStatusPipe } from './shared/filter-by-status.pipe';
import { SearchByPipe } from './shared/search-by.pipe';

@NgModule({
  imports: [CommonModule, FormsModule, CustomerRoutingModule],
  declarations: [
    CustomerHeaderComponent,
    CustomerDetailComponent,
    CustomerFormComponent,
    CustomerListComponent,
    FilterByStatusPipe,
    SearchByPipe
  ],
  providers: [CustomerService]
})
export class CustomerModule {}
