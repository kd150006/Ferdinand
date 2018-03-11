import { Component, OnInit } from '@angular/core';

import { Basket } from './shared/basket.model';
import { BasketService } from './shared/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  public baskets: Basket[];

  constructor(private basketService: BasketService) {}

  ngOnInit() {
    this.getBaskets();
  }

  getBaskets(): void {
    this.basketService
      .getBaskets()
      .subscribe(baskets => (this.baskets = baskets));
  }
}
