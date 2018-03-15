import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Location } from '@angular/common';

import { Product } from './../shared/product.model';
import { ProductService } from './../shared/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  public product: Product;

  constructor(
    private productService: ProductService,
    private location: Location
  ) {}

  ngOnInit() {
    this.initProduct();
  }

  initProduct(): void {
    this.product = new Product();
    this.product.status = 'A';
    this.product.name = '';
    this.product.number = '';
    this.product.netPrice = null;
    this.product.barcode = '';
  }

  save(): void {
    this.productService
      .createProduct(this.product)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
