import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IProductResponse } from '../../interface/products/products';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductInfoResolver implements Resolve<IProductResponse> {

  constructor(private productService: ProductService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any>{
    return this.productService.getOneFirebase(String(route.paramMap.get('id')))
  }
}
