import {Component, Input} from '@angular/core';
import {IDevice} from "../../models/device";
import {BasketService} from "../../services/basket.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent {

  constructor(
    public basketService: BasketService,
    private router: Router,
    public authService: AuthService
  ) {
  }

  @Input() device: IDevice

  url:string = 'http://localhost:5000/'

  navigate() {this.router.navigate(['/login'])}
}
