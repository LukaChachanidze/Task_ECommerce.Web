import { AuthGuard } from './shared/authguard';
import { AuthComponent } from './auth/auth.component';
import { ProductComponent } from '../app/product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'products', component: ProductComponent, canActivate: [AuthGuard] }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
