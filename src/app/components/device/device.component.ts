import {Component, Input} from '@angular/core';
import {IDevice} from "../../models/device";

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent {

  @Input() device: IDevice

  url:string = 'http://localhost:5000/'

}
