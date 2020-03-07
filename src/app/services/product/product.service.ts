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
  setProduct(product: Product) {
    if (!this.productList) {
      this.productList = [];
    }
    this.productList.push(product);
  }

  updateProduct(index, product: Product) {
    this.productList[index] = product;
  }

  deleteProduct(index: number) {
    this.productList.splice(index, 1);
  }
}
