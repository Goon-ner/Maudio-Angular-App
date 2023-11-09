import {Component, Input} from '@angular/core';
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})


export class DeviceListComponent {

  constructor(
    public productService: ProductsService
  ) {
  }
  ngOnInit():void {
    this.productService.getAll().subscribe()
  }


}
