import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/services/device.service';
import { Device } from 'src/app/models/device';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {
  ResultSearch: Device[] = [];
  device:Device = {
    device: '',
    room: '',
    floor: '',
    status:false
  }
  constructor(private deviceService: DeviceService,private router: Router) { }

  ngOnInit(): void {
  }
  addDevice()
{
  this.deviceService.add(this.device).subscribe((ResultSearch) => {
    this.ResultSearch =[ResultSearch, ...this.ResultSearch];
  });
 this.router.navigate(['SignIn']);
}
}
