import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StockHeaderComponent } from './stock-header/stock-header.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { StockFormComponent } from './stock-form/stock-form.component';
import { StockService } from './shared/stock.service';
import { StockRoutingModule } from './stock-routing.module';

import { SearchByPipe } from './shared/search-by.pipe';
import { FilterByStatusPipe } from './shared/filter-by-status.pipe';


@NgModule({
  imports: [CommonModule, FormsModule, StockRoutingModule],
  declarations: [
    StockHeaderComponent,
    StockListComponent,
    StockDetailComponent,
    StockFormComponent,
    SearchByPipe,
    FilterByStatusPipe
  ],
  providers: [StockService]
})
export class StockModule {}
