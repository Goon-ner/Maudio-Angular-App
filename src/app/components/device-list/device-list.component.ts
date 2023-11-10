import {Component, Input, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})


export class DeviceListComponent implements OnInit{

  term: string = ''


  brand(brand:string) {
    this.productService.getByBrand(brand).subscribe()
  }
  constructor(
    public productService: ProductsService
  ) {
  }
  ngOnInit():void {
    this.productService.getAll().subscribe()
  }


}
