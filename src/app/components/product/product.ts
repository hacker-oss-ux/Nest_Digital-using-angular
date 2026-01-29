import { Component, OnDestroy, OnInit } from '@angular/core';
import { Apiservice } from '../../apiservice';
import { NavigationEnd, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter, Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrls: ['./product.css'],
})
export class Product implements OnInit, OnDestroy {
  products: any[] = [];
  selectedProduct: any = null;
  isProductLoading = false;
  private navSubscription?: Subscription;
  constructor(private apiservice: Apiservice, private router: Router) {}

  ngOnInit() {
    this.loadProducts();
    this.navSubscription = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        if (event.urlAfterRedirects === '/product') {
          this.closeModal();
          if (!this.products.length) {
            this.loadProducts();
          }
        }
      });
  }

  ngOnDestroy() {
    this.navSubscription?.unsubscribe();
  }

  private loadProducts() {
    this.apiservice.getProduct().subscribe((data: any) => {
      this.products = data;
    });
  }


  viewProduct(product: any, event?: Event) {
    if (event) event.stopPropagation();
    if (!product) {
      return;
    }

    this.selectedProduct = { ...product };
    if (!product.id) {
      return;
    }

    this.isProductLoading = true;
    this.apiservice.getSingleProduct(product.id).subscribe({
      next: (data: any) => {
        this.selectedProduct = data;
        this.isProductLoading = false;
      },
      error: () => {
        this.isProductLoading = false;
      }
    });
  }


  closeModal() {
    this.isProductLoading = false;
    this.selectedProduct = null;
  }

  goToSingle(productId: any, event?: Event) {
    if (event) event.stopPropagation();
    if (productId) {
      this.router.navigate(['/singleview', productId]);
    }
  }
}


