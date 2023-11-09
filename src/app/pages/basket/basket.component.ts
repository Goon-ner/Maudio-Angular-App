import { Component } from '@angular/core';
import {BasketService} from "../../services/basket.service";
import {IDevice} from "../../models/device";
import {Observable} from "rxjs";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {


  url:string = 'http://localhost:5000/'
  constructor(
    public basketService: BasketService
  ) {  }

  protected readonly console = console;
}
