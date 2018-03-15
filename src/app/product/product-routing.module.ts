import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';


const productRoutes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/id/:id', component: ProductDetailComponent },
  { path: 'products/new', component: ProductFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
