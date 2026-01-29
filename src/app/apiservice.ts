import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Apiservice {
  constructor(private http: HttpClient){}
  getProduct (){
    return this.http.get('https://fakestoreapi.com/products');
  }
  getSingleProduct(id: String) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }
}
