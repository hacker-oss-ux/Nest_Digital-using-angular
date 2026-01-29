import { Component } from '@angular/core';
import { Apiservice } from '../../apiservice';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrls: ['./product.css'],
})
export class Product {
  products: any[] = [];
  selectedProduct: any = null;
  constructor(private apiservice: Apiservice, private router: Router) {}
  ngOnInit() {
    this.apiservice.getProduct().subscribe((data: any) => {
      this.products = data;
    });
  }

  viewProduct(product: any, event?: Event) {
    if (event) event.stopPropagation();
    this.selectedProduct = product;
  }

  closeModal() {
    this.selectedProduct = null;
  }

  goToSingle(productId: any, event?: Event) {
    if (event) event.stopPropagation();
    if (productId) {
      this.router.navigate(['/singleview', productId]);
    }
  }
}


