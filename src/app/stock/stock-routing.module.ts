import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StockListComponent } from './stock-list/stock-list.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { StockFormComponent } from './stock-form/stock-form.component';


const stockRoutes: Routes = [
  { path: 'stocks', component: StockListComponent },
  { path: 'stocks/id/:id', component: StockDetailComponent },
  { path: 'stocks/new', component: StockFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(stockRoutes)],
  exports: [RouterModule]
})
export class StockRoutingModule {}
