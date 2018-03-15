import {Component, OnInit} from '@angular/core';

import { Stock } from './../shared/stock.model';
import { StockHeaderComponent } from './../stock-header/stock-header.component';
import { StockService } from './../shared/stock.service';

import { SearchByPipe } from './../shared/search-by.pipe';
import { FilterByStatusPipe } from './../shared/filter-by-status.pipe';




@Component({
  selector: 'app-stock',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
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
