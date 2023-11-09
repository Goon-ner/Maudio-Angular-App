import { Component } from '@angular/core';
import {ProductsService} from "../../sevices/products.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-device-page',
  templateUrl: './device-page.component.html',
  styleUrls: ['./device-page.component.scss']
})
export class DevicePageComponent {
  loading = false
  id: string
  url:string = 'http://localhost:5000/'

  constructor(
    public productService: ProductsService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.loading = true
    this.route.params.subscribe(params => {
      this.id = params['id']
    })

    this.productService.getOne(this.id).subscribe(() => {
      this.loading = false
    })
  }

}
