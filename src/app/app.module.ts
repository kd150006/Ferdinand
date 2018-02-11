import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductTypeComponent } from './product-type/product-type.component';
import { ProductTypeService } from './product-type/shared/product-type.service';
import { StockComponent } from './stock/stock.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductTypeComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductTypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
