import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { Product } from '../../../models/product-model';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api/';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
product: Product;
productId: string;
uploadedFiles: any[] = [];
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.product = new Product();
    this.productId = this.route.snapshot.paramMap.get('index');
    console.log(this.product);
    if (this.productId) {
      this.product = this.productService.getProduct(this.productId);
    }
  }

  onAddProduct() {
    this.productService.setProduct(this.product);
    this.product = new Product();
    this.router.navigateByUrl('products/product-list');
    // this.onGetProducts();
  }

  onSaveProduct() {
    this.productService.updateProduct(this.productId, this.product);
    this.product = new Product();
    this.router.navigateByUrl('products/product-list');
  }

//   onUpload(event) {
//     for(let file of event.files) {
//         this.uploadedFiles.push(file);
//     }

//     this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
// }
onBasicUpload(event) {
  this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
}
}
