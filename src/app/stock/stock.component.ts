import {Component, OnInit} from '@angular/core';

import {Stock} from '../stock/shared/stock.model';
import {StockService} from '../stock/shared/stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  stocks: Stock[];

  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.getStocks();
  }

  getStocks(): void {
    this.stockService.getStocks()
      .subscribe(stocks => this.stocks = stocks);
  }

}
