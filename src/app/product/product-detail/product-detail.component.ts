import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Product } from './../shared/product.model';
import { ProductService } from './../shared/product.service';
import { Stock } from './../../stock/shared/stock.model';
import { StockService } from './../../stock/shared/stock.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;
  stocks: Stock[];

  public canEdit: Boolean;
  public showMore: Boolean;
  public btnLockLabel: String;
  public btnShowLabel: String;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private productService: ProductService,
    private stockService: StockService
  ) {}

  ngOnInit() {
    this.canEdit = false;
    this.btnLockLabel = 'Unlock';
    this.showMore = false;
    this.btnShowLabel = 'More';
    this.getProduct();
    this.getStocks();
  }

  compareStockFn(c1: Stock, c2: Stock): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  onChangeActive(): void {
    if (this.product.status === 'A') {
      this.product.status = 'I';
    } else {
      this.product.status = 'A';
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

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService
      .getProduct(id)
      .subscribe(product => (this.product = product));
  }

  getStocks(): void {
    this.stockService.getStocks().subscribe(stocks => (this.stocks = stocks));
  }

  newProduct(): void {
    this.productService
      .createProduct(this.product)
      .subscribe(() => this.goBack());
  }

  delete(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService
      .deleteProduct(id)
      .subscribe(product => (this.product = product), () => this.goBack());
  }

  save(): void {
    this.productService
      .updateProduct(this.product)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
  // Force a page refresh with this method
  goHome(): void {
    this.router.navigateByUrl('/products/#');
  }
}
