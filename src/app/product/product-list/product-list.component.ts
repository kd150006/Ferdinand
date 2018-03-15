import { Component, OnInit, Input } from '@angular/core';

import { Product } from './../shared/product.model';
import { ProductHeaderComponent } from './../product-header/product-header.component';
import { ProductService } from './../shared/product.service';
import { ProductRoutingModule } from './../product-routing.module';
import { SearchByNamePipe } from './../shared/search-by-name.pipe';
import { FilterByStatusPipe } from './../shared/filter-by-status.pipe';

import { MessageService } from './../../messages/shared/message.service';

@Component({
  selector: 'app-product',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products: Product[];
  public selectedProduct: Product;

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
