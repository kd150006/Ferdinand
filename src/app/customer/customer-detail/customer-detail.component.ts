import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Customer } from './../shared/customer.model';
import { CustomerService } from './../shared/customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  @Input() customer: Customer;
  canEdit: boolean;
  showMore: boolean;
  btnShowLabel: string;
  btnLockLabel: string;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) {}

  ngOnInit() {
    this.canEdit = false;
    this.btnLockLabel = 'Unlock';
    this.showMore = false;
    this.btnShowLabel = 'More';
    this.getCustomer();
  }

  onChangeActive(): void {
    if (this.customer.status === 'A') {
      this.customer.status = 'I';
    } else {
      this.customer.status = 'A';
    }
  }

  doShowMore(): void {
    if (this.showMore) {
      this.showMore = false;
      this.btnShowLabel = 'More';
    } else {
      this.showMore = true;
      this.btnShowLabel = 'Less';
    }
  }

  doEdit(): void {
    if (this.canEdit) {
      this.canEdit = false;
      this.btnLockLabel = 'Unlock';
    } else {
      this.canEdit = true;
      this.btnLockLabel = 'Lock';
    }
  }

  getCustomer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.customerService
      .getCustomer(id)
      .subscribe(customer => (this.customer = customer));
  }
  save(): void {
    this.customerService
      .updateCustomer(this.customer)
      .subscribe(() => this.goBack());
  }

  delete(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.customerService.deleteCustomer(id).subscribe(() => this.goHome());
  }

  goBack(): void {
    this.location.back();
  }

  goHome(): void {
    this.router.navigateByUrl('/users');
  }
}
