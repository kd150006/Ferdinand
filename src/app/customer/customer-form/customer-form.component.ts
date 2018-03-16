import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Location } from '@angular/common';

import { Customer } from './../shared/customer.model';
import { CustomerService } from './../shared/customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  public customer: Customer;

  constructor(
    private location: Location,
    private customerService: CustomerService
  ) {}

  ngOnInit() {
    this.initUser();
  }

  initUser(): void {
    this.customer = new Customer();
    this.customer.status = 'A';
    this.customer.firstName = '';
    this.customer.lastName = '';
    this.customer.number = null;
    this.customer.telephoneNumber = '';
    this.customer.emailAddress = '';
  }

  save(): void {
    this.customerService.createCustomer(this.customer).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
