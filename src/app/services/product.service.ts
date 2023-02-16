import { Product } from './../models/Product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../models/Cart';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly CART_API_URL = 'http://localhost:5000/api/cart/';
  private readonly PRODUCT_API_URL = 'http://localhost:5000/api/product/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  };

  constructor(private http: HttpClient) { }

  deleteProduct(id: number): Observable<any> {
    return this.http.post(`${this.PRODUCT_API_URL}${id}`, this.httpOptions)
  }

  createProduct(_name: string, _description: string, _price: number) {
    const product = {
      name: _name,
      description: _description,
      price: _price
    }
    return this.http.post(`${this.PRODUCT_API_URL}`, product, this.httpOptions);
  }

  updateProduct(_id: number, _name: string, _description: string, _price: number) {
    console.log('put');
    const product = {
      id: _id,
      name: _name,
      description: _description,
      price: _price
    }
    return this.http.post(`${this.PRODUCT_API_URL}UpdateProductAsync`, product, this.httpOptions);
  }

  getProductByIdAsync(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.PRODUCT_API_URL}${productId}`, this.httpOptions);
  }

  getAllProductsAsync(): Observable<Product[]> {
    console.log(this.httpOptions);
    console.log(localStorage.getItem('token'));
    return this.http.get<Product[]>(`${this.PRODUCT_API_URL}GetAllProductsAsync`, this.httpOptions)
    }
  };

