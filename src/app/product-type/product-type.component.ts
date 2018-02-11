import { Component, OnInit } from '@angular/core';

import { ProductType } from './shared/product-type.model';
import { ProductTypeService } from './shared/product-type.service';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.css']
})
export class ProductTypeComponent implements OnInit {
  public productTypes: ProductType[];

  constructor(private productTypeService: ProductTypeService) { }

  ngOnInit() {
    this.getProductTypes();
  }

  getProductTypes(): void {
    this.productTypeService.getProductTypes()
      .subscribe(productTypes => this.productTypes = productTypes);
  }
}
