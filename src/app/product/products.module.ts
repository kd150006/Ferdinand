import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductComponent } from './product.component';
import { ProductDetailComponent } from './../product-detail/product-detail.component';
import { ProductFormComponent } from './../product-form/product-form.component';
import { ProductService } from './shared/product.service';
import { ProductRoutingModule } from './product-routing.module';
import { SearchByNamePipe } from './shared/search-by-name.pipe';

@NgModule({
  imports: [CommonModule, FormsModule, ProductRoutingModule],
  declarations: [ProductComponent, ProductDetailComponent, ProductFormComponent, SearchByNamePipe],
  providers: [ProductService]
})
export class ProductsModule {}
