import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Stock } from './../stock/shared/stock.model';
import { StockService } from './../stock/shared/stock.service';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent implements OnInit {
  @Input() stock: Stock;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private stockService: StockService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getStock();
  }

  getStock(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.stockService.getStock(id).subscribe(stock => (this.stock = stock));
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
