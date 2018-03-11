import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

/* Own modules */
import { ProductsModule } from './product/products.module';
import { StockModule } from './stock/stock.module';
import { BasketModule } from './basket/basket.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';

import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
// import { BasketComponent } from './basket/basket.component';
// import { ProductFormComponent } from './product-form/product-form.component';
// import { StockFormComponent } from './stock-form/stock-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    HomeComponent,
    MessagesComponent,
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ProductsModule,
    StockModule,
    BasketModule,
    AppRoutingModule
  ],

  providers: [
    MessageService
  ],

  bootstrap: [AppComponent]

})

export class AppModule { }
