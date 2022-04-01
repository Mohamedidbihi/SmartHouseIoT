import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device';
import { DeviceService } from 'src/app/services/device.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeviceDetailsComponent } from '../dialog-device-details/dialog-device-details.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
 count = 1;
 devices: Device[] = [];
 ResultSearch: Device[] = [];
  constructor(private deviceService: DeviceService, public dialog: MatDialog,private router: Router) { }

  ngOnInit(): void {
    this.getDevices();
  }
  showDetails(device:any){
    this.dialog.open(DialogDeviceDetailsComponent, {
      width: '500px',
      height: '300px',
      data: {
        device: device,
      },
    });
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

  deleteDevice(id:any)
{
  this.deviceService.delete(id).subscribe(() => {
    this.ResultSearch = this.ResultSearch.filter(ResultSearch => ResultSearch.id != id)
  })
}
showAdd(){
this.router.navigate(['About'])
}

}

