import { Component } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Router} from "@angular/router";
import {BasketService} from "../../services/basket.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  loading = false
  id: string = '63'
  url: string = 'http://localhost:5000/'
  navigate() {this.router.navigate(['/login'])}

  constructor(
    public productService: ProductsService,
    public basketService: BasketService,
    private router: Router,
    public authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.loading = true

    this.productService.getOne(this.id).subscribe(() => {
      this.loading = false
    })
    this.productService.getAll().subscribe(() => {
      this.loading = false
    })
  }
}
