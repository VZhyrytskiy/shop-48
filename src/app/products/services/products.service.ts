import {Injectable} from '@angular/core';
import {Category, ProductModel} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() {
  }

  public getProducts(): ProductModel[] {
    return [
      {
        id: 1,
        name: 'Ramen',
        description: 'Japanese noodle soup. It consists of Chinese wheat noodles served in a meat.',
        price: 3.4,
        category: Category.FOOD,
        isAvailable: true
      },
      {
        id: 2,
        name: 'Coca Cola',
        description: ' Carbonated soft drink manufactured by The Coca-Cola Company',
        price: 3.2,
        category: Category.BEVERAGES,
        isAvailable: true
      },
      {
        id: 3,
        name: 'Pepsi',
        description: ' Carbonated soft drink manufactured by PepsiCo',
        price: 3.4,
        category: Category.BEVERAGES,
        isAvailable: false
      },
      {
        id: 4,
        name: 'Horseshoe',
        description: 'When kept as a talisman, a horseshoe is said to bring good luck',
        price: 5.0,
        category: Category.SOUVENIRS,
        isAvailable: true
      }
    ];
  }
}
