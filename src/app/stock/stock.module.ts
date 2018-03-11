import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StockComponent } from './stock.component';
import { StockDetailComponent } from './../stock-detail/stock-detail.component';
import { StockService } from './shared/stock.service';
import { StockRoutingModule } from './stock-routing.module';
import { StockFormComponent } from './../stock-form/stock-form.component';
import { SearchByPipe } from './shared/search-by.pipe';


@NgModule({
  imports: [CommonModule, FormsModule, StockRoutingModule],
  declarations: [StockComponent, StockDetailComponent, StockFormComponent, SearchByPipe],
  providers: [StockService]
})
export class StockModule {}
