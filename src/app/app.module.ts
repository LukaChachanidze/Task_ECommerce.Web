import { AuthGuard } from './shared/authguard';
  import { RouterModule } from '@angular/router';
  import { HttpClient, HttpClientModule } from '@angular/common/http';
  import { NgModule } from '@angular/core';
  import { ReactiveFormsModule } from '@angular/forms';
  import { BrowserModule } from '@angular/platform-browser';

  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';
  import { AuthComponent } from './auth/auth.component';
  import { ProductComponent } from './product/product.component';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import {MatCardModule} from '@angular/material/card';
  import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CartComponent } from './cart/cart.component';



  @NgModule({
    declarations: [
      AppComponent,
      AuthComponent,
      ProductComponent,
      CartComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      HttpClientModule,
      RouterModule,
      BrowserAnimationsModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatSnackBarModule,
      MatToolbarModule
    ],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
  })
  export class AppModule { }



