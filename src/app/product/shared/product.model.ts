import { Stock } from '../../stock/shared/stock.model';

export class Product {
  id: number;
  netPrice: number;
  quantity: number;
  number: string;
  name: string;
  barcode: string;
  status: string;
  stock: Stock;
}
