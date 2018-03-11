import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';

import { Product } from './shared/product.model';
import { ProductService } from './shared/product.service';
import { ProductRoutingModule } from './product-routing.module';
import { SearchByNamePipe } from './shared/search-by-name.pipe';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService
      .getProducts()
      .subscribe(products => (this.products = products));
  }
}
