import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly CART_API_URL = 'http://localhost:5000/api/cart/';
  private userId = localStorage.getItem('userId');

  private httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  };

  constructor(private http: HttpClient) { }

  addProductToCart(product: Product) : Observable<any> {
    return this.http.post(`${this.CART_API_URL}${this.userId}/products`, product, this.httpOptions);
  }

  getCartByUserId() : Observable<Product[]>{
    return this.http.get<Product[]>(`${this.CART_API_URL}${this.userId}`, this.httpOptions);
  }

  removeProductFromCart(id: number){
    return this.http.post(`${this.CART_API_URL}${this.userId}/${id}`, null, this.httpOptions);
  }
};
