import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products! : Product[]

  constructor() { 
    this.products = [
      {id:1, name: "printer", price : 700},
      {id:2, name: "computer", price : 2700},
      {id:3, name: "phone", price : 1100}
    ]
  }

  public getAllProducts(): Observable<Product[]>{
    let rnd = Math.random()
    if (rnd<0.1) return throwError(() => new Error("Internet connexion Error"))
    else return of(this.products);
  }

  public deleteProduct(id: number) : Observable<boolean>{
    this.products = this.products.filter(p=>p.id!=id)
    return of (true)
  }


}
