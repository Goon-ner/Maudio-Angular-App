import {Component, Input} from '@angular/core';
import {IDevice} from "../../models/device";
import {BasketService} from "../../services/basket.service";

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent {

  constructor(
    public basketService: BasketService
  ) {
  }

  @Input() device: IDevice

  url:string = 'http://localhost:5000/'

}
