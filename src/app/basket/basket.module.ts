import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BasketComponent } from './basket.component';
import { BasketService } from './shared/basket.service';
import { BasketRoutingModule } from './basket-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, BasketRoutingModule],
  declarations: [BasketComponent],
  providers: [BasketService]
})
export class BasketModule {}
