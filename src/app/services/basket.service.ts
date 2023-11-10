import {Injectable, Input} from '@angular/core';
import {IProduct} from "../models/product";
import {Observable} from "rxjs";
import {IDevice} from "../models/device";
import {BasketComponent} from "../pages/basket/basket.component";

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  basketDevices: IDevice[] = []


  addBasket(device: IDevice): Observable<IDevice[]> {
    // @ts-ignore
    return this.basketDevices.push(device)
  }

  removeDevice(id: number) {
    for (let i = 0; i < this.basketDevices.length; i++) {
      if (this.basketDevices[i].id === id) {
        this.basketDevices.splice(i, 1);
        break;
      }
    }
  }
}
