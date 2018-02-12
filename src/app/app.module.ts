import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductTypeComponent } from './product-type/product-type.component';
import { ProductTypeService } from './product-type/shared/product-type.service';
import { StockComponent } from './stock/stock.component';
import { StockService } from './stock/shared/stock.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductTypeComponent,
    StockComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProductTypeService,
    StockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
