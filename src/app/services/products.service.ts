import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {IProduct} from "../models/product";
import {IDevice} from "../models/device";

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  constructor(
    private http: HttpClient,
    ) {

  }

  product: IProduct
  device: IDevice

  getAll(): Observable<IProduct>{
    return this.http.get<IProduct>('http://localhost:5000/api/device'
    ).pipe(tap(prod => this.product = prod))
  }

  getOne(id:string): Observable<IDevice>{
    return this.http.get<IDevice>(`http://localhost:5000/api/device/${id}`).pipe(tap(device => this.device = device))
  }
  getByBrand(brand:string): Observable<IProduct>{
    return this.http.get<IProduct>(`http://localhost:5000/api/device?brandId=${brand}`
    ).pipe(tap(prod => this.product = prod))
  }
}
