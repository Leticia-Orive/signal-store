import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})

export class ProductsService  {
   private http = inject(HttpClient);

  getProducts() {
    return this.http.get('https://fakestoreapi.com/products');	
  }
}