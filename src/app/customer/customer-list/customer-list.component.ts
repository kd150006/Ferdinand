import { Component, OnInit } from '@angular/core';

import { Customer } from './../shared/customer.model';
import { CustomerHeaderComponent } from './../customer-header/customer-header.component';
import { CustomerService } from './../shared/customer.service';

import { FilterByStatusPipe } from './../shared/filter-by-status.pipe';
import { SearchByPipe } from './../../stock/shared/search-by.pipe';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[];
  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService
      .getCustomers()
      .subscribe(customers => (this.customers = customers));
  }
}
