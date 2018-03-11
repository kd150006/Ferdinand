import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasketComponent } from './basket.component';

const basketRoutes: Routes = [
  { path: 'baskets', component: BasketComponent }

];

@NgModule({
  imports: [RouterModule.forChild(basketRoutes)],
  exports: [RouterModule]
})
export class BasketRoutingModule {}
