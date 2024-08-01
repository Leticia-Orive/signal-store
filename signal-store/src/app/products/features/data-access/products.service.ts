
import {  Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseHttpService } from "../../../shared/ui/header/data-access/base-http.service";
import { Product } from "../../../shared/interfaces/product.interface";

@Injectable({providedIn: 'root'})

export class ProductsService extends BaseHttpService {
   /*Esto es una forma si no estaria el extends BaseHttpService
   private http = inject(HttpClient);
   */

  getProducts():Observable<Product[]> {
  //  return this.http.get('https://fakestoreapi.com/products');
    return this.http.get<any[]>(`${this.apiUrl}/products`);	
  }
}