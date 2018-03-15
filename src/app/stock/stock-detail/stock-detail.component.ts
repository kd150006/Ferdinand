import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from './../../product/shared/product.model';
import { ProductService } from './../../product/shared/product.service';
import { Stock } from './../shared/stock.model';
import { StockService } from './../shared/stock.service';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit {
  @Input() stock: Stock;
  showMore: Boolean;
  canEdit: Boolean;
  showProducts: Boolean;
  btnShowLabel: String;
  btnShowProductLabel: String;
  btnLockLabel: String;
  searchText: String;
  productsInStock: Product[];
  totalStockQty: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private stockService: StockService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.canEdit = false;
    this.btnLockLabel = 'Unlock';
    this.showMore = false;
    this.btnShowLabel = 'More';
    this.showProducts = false;
    this.btnShowProductLabel = 'Show products';
    this.getStock();
    this.getTotalStockQty();
    this.getProducts();
  }

  onChangeActive(): void {
    if (this.stock.status === 'A') {
      this.stock.status = 'I';
    } else {
      this.stock.status = 'A';
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
  doShowMoreProducts(): void {
    if (this.showProducts) {
      this.showProducts = false;
      this.btnShowProductLabel = 'Show products';
    } else {
      this.showProducts = true;
      this.btnShowProductLabel = 'Hide products';
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
    this.showProducts = false;
  }
  getStock(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.stockService.getStock(id).subscribe(stock => (this.stock = stock));
  }

  getTotalStockQty(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService
      .getTotalStockQty(id)
      .subscribe(totalStockQty => (this.totalStockQty = totalStockQty));
  }
  getProducts(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService
      .getProductsOnStock(id)
      .subscribe(productsInStock => (this.productsInStock = productsInStock));
  }

  save(): void {
    this.stockService.updateStock(this.stock).subscribe(() => this.goBack());
  }

  delete(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.stockService.deleteStock(id).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
