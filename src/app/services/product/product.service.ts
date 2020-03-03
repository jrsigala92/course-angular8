import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: Array<Product> = [];
  constructor() { }

  getProducts() {
    return this.productList;
  }

  getProduct(index: string) {
    return this.productList[index];
  }
  setProduct(employee: Product) {
    if (!this.productList) {
      this.productList = [];
    }
    this.productList.push(employee);
  }

  updateProduct(index, employee: Product) {
    this.productList[index] = employee;
  }

  deleteProduct(index: number) {
    this.productList.splice(index, 1);
  }
}
