import { Component, OnInit } from '@angular/core';
import { Product } from './../models/Product';
import { Cart } from './../models/Cart';
import { ProductService } from '../services/product.service';
import {FormBuilder, Validators} from "@angular/forms";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products?: Product[];
  cart?: Cart;
  userId = JSON.parse(localStorage.getItem('userId') || '{}');

  createProductForm!: any;

  constructor(
    private productService: ProductService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.createProductForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
    })
  }

  createProduct() {
    this.productService.createProduct(
      this.createProductForm.value.name,
      this.createProductForm.value.description,
      this.createProductForm.value.price
    ).subscribe();
    this.getAllProducts()
  }

  getAllProducts(): void {
    this.productService.getAllProductsAsync().subscribe((x) => {
      this.products = x;
    });
  }

  deleteItem(id: number) {
    this.productService.deleteProduct(id).subscribe();
    this.getAllProducts();
  }

  edit(product: Product) {
    this.createProductForm.controls.id.setValue(product.id)
    this.createProductForm.controls.name.setValue(product.name)
    this.createProductForm.controls.description.setValue(product.description)
    this.createProductForm.controls.price.setValue(product.price)
  }

  saveChanges() {
    this.productService.updateProduct(
      this.createProductForm.value.id,
      this.createProductForm.value.name,
      this.createProductForm.value.description,
      this.createProductForm.value.price
    ).subscribe();
    this.getAllProducts();
  }
}
