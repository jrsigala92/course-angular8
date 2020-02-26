import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product-model';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Array<Product>;
  product: Product = new Product();
  constructor() { }

  ngOnInit(): void {
    this.productList = new Array<Product>();
  }

  onAddProduct() {
    this.productList.push(this.product);
    this.product = new Product();
  }

  onProductRemove(index: number) {
    this.productList.splice(index, 1);
  }
}
