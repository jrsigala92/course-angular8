import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product-model';
import { ProductService } from 'src/app/services/product/product.service';
import { ConfirmationService } from 'primeng/api/';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Array<Product>;
  product: Product = new Product();
  constructor(
    private productService: ProductService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.productList = this.onGetProducts();
  }

  // onAddProduct() {
  //   this.productService.setProduct(this.product);
  //   this.product = new Product();
  //   this.onGetProducts();
  // }

  onProductRemove(index: number) {
    this.productService.deleteProduct(index);
    this.onGetProducts();
  }

  onGetProducts() {
    return this.productService.getProducts();
  }

  confirm(index) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to remove employee?',
      accept: () => {
        this.onProductRemove(index);
      }
  });

}
}
