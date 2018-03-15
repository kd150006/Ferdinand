import { Component, OnInit } from '@angular/core';

import { SearchByPipe } from './../shared/search-by.pipe';

@Component({
  selector: 'app-stock-header',
  templateUrl: './stock-header.component.html',
  styleUrls: ['./stock-header.component.css']
})
export class StockHeaderComponent implements OnInit {
  searchText: String;
  filterStatus: String;

  constructor() { }

  ngOnInit() {
  }

}
