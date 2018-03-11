import { Component, OnInit } from '@angular/core';

import { Product } from '../product/shared/product.model';
import { ProductService } from '../product/shared/product.service';
import { Stock } from '../stock/shared/stock.model';
import { StockService } from '../stock/shared/stock.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
