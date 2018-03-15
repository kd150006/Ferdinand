import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

/* Own modules */
import { ProductsModule } from './product/product.module';
import { StockModule } from './stock/stock.module';
import { UserModule } from './user/user.module';

import { DashboardHeaderComponent } from './dashboard/dashboard-header/dashboard-header.component';
import { DashboardBodyComponent } from './dashboard/dashboard-body/dashboard-body.component';
import { DashboardFooterComponent } from './dashboard/dashboard-footer/dashboard-footer.component';
import { HomeComponent } from './home/home.component';


import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './messages/shared/message.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardHeaderComponent,
    DashboardBodyComponent,
    DashboardFooterComponent,
    HomeComponent,
    MessagesComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ProductsModule,
    UserModule,
    StockModule,
    AppRoutingModule
  ],

  providers: [
    MessageService
  ],

  bootstrap: [AppComponent]

})

export class AppModule {}
