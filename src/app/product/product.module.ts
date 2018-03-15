import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductHeaderComponent } from './product-header/product-header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductService } from './shared/product.service';
import { ProductRoutingModule } from './product-routing.module';
import { SearchByNamePipe } from './shared/search-by-name.pipe';
import { FilterByStatusPipe } from './shared/filter-by-status.pipe';




@NgModule({
  imports: [CommonModule, FormsModule, ProductRoutingModule],
  declarations: [
    ProductHeaderComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductFormComponent,
    SearchByNamePipe,
    FilterByStatusPipe,
    ProductHeaderComponent
  ],
  providers: [ProductService]
})
export class ProductsModule {}
