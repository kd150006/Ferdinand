import { FormsModule, NgModel } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { Stock } from './../shared/stock.model';
import { StockService } from './../shared/stock.service';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {
  public stock: Stock;

  constructor(
    private stockService: StockService,
    private location: Location
  ) {}

  ngOnInit() {
    this.initStock();
  }

  initStock(): void {
    this.stock = new Stock();
    this.stock.name = '';
    this.stock.status = 'A';
  }

  save(): void {
    this.stockService.createStock(this.stock).subscribe(() => this.goBack());
  }

  clear(): void {}

  goBack(): void {
    this.location.back();
  }
}
