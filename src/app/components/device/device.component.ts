import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
 count = 1;
 devices: Device[] = [];
 ResultSearch: Device[] = [];
  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.getDevices();
  }
  getDevices()
  {
  this.deviceService.finAll().subscribe(devices =>{
    this.ResultSearch = this.devices = devices
  } )
  }

  statusDevice(device:any)
  {
  this.deviceService.statusDevice(device.id ,device.status).subscribe(() => {
    device.status = !device.status
  })

}

}
