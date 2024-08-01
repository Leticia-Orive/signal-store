import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseHttpService } from "../../../shared/ui/header/data-access/base-http.service";

@Injectable({providedIn: 'root'})

export class ProductsService extends BaseHttpService {
   /*Esto es una forma si no estaria el extends BaseHttpService
   private http = inject(HttpClient);
   */

  getProducts() {
  //  return this.http.get('https://fakestoreapi.com/products');
    return this.http.get(`${this.apiUrl}/products`);	
  }
}