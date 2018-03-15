import { Component, OnInit } from '@angular/core';
import { SearchByNamePipe } from './../shared/search-by-name.pipe';
import { FilterByStatusPipe } from './../../user/shared/filter-by-status.pipe';



@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.css']
})
export class ProductHeaderComponent implements OnInit {
  searchText: String;
  filterStatus: String;

  constructor() { }

  ngOnInit() {
  }

}
