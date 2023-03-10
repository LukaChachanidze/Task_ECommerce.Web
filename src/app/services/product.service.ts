import { Product } from './../models/Product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly PRODUCT_API_URL = 'http://localhost:5000/api/product/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  };

  constructor(private http: HttpClient) { }

  deleteProduct(id: number): Observable<any> {
    return this.http.post(`${this.PRODUCT_API_URL}${id}`, null, this.httpOptions)
  }

  createProduct(_name: string, _description: string, _price: number) : Observable<any> {
    const product = {
      name: _name,
      description: _description,
      price: _price
    }
    return this.http.post(`${this.PRODUCT_API_URL}`, product, this.httpOptions);
  }

  updateProduct(_id: number, _name: string, _description: string, _price: number) {
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
    return this.http.get<Product[]>(`${this.PRODUCT_API_URL}GetAllProductsAsync`, this.httpOptions)
    }
  };

