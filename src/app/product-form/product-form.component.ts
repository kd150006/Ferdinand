import { FormsModule, NgModel } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { Product } from '../product/shared/product.model';
import { ProductService } from './../product/shared/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  public product: Product;
  @Input() public stocks: Stock[];

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
    this.product.price = null;
    this.product.barcode = '';
  }

  save(): void {
    this.productService
      .createProduct(this.product)
      .subscribe(() => this.goBack());
  }

  clear(): void {}

  goBack(): void {
    this.location.back();
  }
}
