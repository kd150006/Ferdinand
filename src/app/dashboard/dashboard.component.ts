import { Component, OnInit } from '@angular/core';

import { ProductType } from '../product-type/shared/product-type.model';
import { ProductTypeService } from '../product-type/shared/product-type.service';
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
